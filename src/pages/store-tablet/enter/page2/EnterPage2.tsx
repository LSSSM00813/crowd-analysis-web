import "./enterPage2.scss";
import { useState } from "react";
import { useZxing } from "react-zxing";
import { QRResultCard, type QRResultCardProps } from "../../component/qr-result-card/QRResultCard";

const EnterPage2 = () => {
  const [results, setResults] = useState<QRResultCardProps[]>([]);
  const { ref } = useZxing({
    onDecodeResult(result) {
      const text = result.getText();

      // 重複しない場合のみ追加      
      setResults(prev =>
        prev.some(item => item.name === text)
          ? prev
          : [...prev, { personNumber: prev.length + 1, name: text }]
      );

    },
    constraints: {
      video: {
        facingMode: { exact: "user" }, // ← 前面カメラ
      },
    },
  });

  return (
    <div className="page-enter-2">
      <div className="flex-box">
        <div className="flex-left">
          {results.map((item) => (
            <QRResultCard
              key={item.personNumber}
              personNumber={item.personNumber}
              name={item.name}
            />
          ))}
        </div>

        <div className="flex-right">
          <video ref={ref} />
        </div>
      </div>
    </div>
  );
};
export default EnterPage2;

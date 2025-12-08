import "./enterPage2.scss";
import { useState } from "react";
import { useZxing } from "react-zxing";

const EnterPage2 = () => {
  const [result, setResult] = useState("");
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
    constraints: {
      video: {
        facingMode: { exact: "user" }, // ← 前面カメラ
      },
    },
  });

  return (
    <div className="page-enter-2">
      <video ref={ref} />
      <p>
        <span>Last result:</span>
        <span>{result}</span>
      </p>
    </div>
  );
};
export default EnterPage2;

import { useNavigate } from "react-router-dom";
import "./enterPage1.scss";
import { TabletFotter } from "../../component/tablet-fotter/TabletFotter";

const EnterPage1 = () => {
  const navigate = useNavigate();

  return (
    <div className="page-enter-1">
      <div className="page-content">
        <h2>ご来店ありがとうございます</h2>
        <h2>下のボタンをタッチして受付してください</h2>

        <div className="btn-container">
          <button onClick={() => navigate("/store-tablet/enter/page2")}>
            <div>２次元コードを</div>
            <div>お持ちの方</div>
          </button>

          <button onClick={() => navigate("/store-tablet/enter/page2a")}>
            店舗で受付の方
          </button>
        </div>
      </div>

      <TabletFotter />
    </div>
  );
};

export default EnterPage1;

import { useNavigate } from "react-router-dom";
import "./pageInit.scss";

const PageInit = () => {
  const navigate = useNavigate();

  return (
    <div className="page-store-tablet-init">
      <h2>ご来店ありがとうございます</h2>
      <h2>下のボタンをタッチして受付してください</h2>

      <div className="btn-container">
        <button onClick={() => navigate("/store-tablet/enter")}>入店</button>
        <button onClick={() => navigate("/store-tablet/exit")}>退店</button>
      </div>
    </div>
  );
};

export default PageInit;

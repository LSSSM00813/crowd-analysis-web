import "./enterPage1.scss";

const EnterPage1 = () => {
  return (
    <div className="page-enter-1">
      <h2>ご来店ありがとうございます</h2>
      <h2>下のボタンをタッチして受付してください</h2>

      <div className="btn-container">
        <button>２次元コードをお持ちの方</button>
        <button>店舗で受付の方</button>
      </div>
    </div>
  );
};

export default EnterPage1;

import { useNavigate } from "react-router-dom";
import "./tabletFotter.scss";

export const TabletFotter = () => {
  const navigate = useNavigate();

  return (
    <div className="tablet-fotter">
      <button className="btn-back" onClick={() => navigate(-1)}>
        戻る
      </button>
      <button className="btn-confirm">確定</button>
    </div>
  );
};

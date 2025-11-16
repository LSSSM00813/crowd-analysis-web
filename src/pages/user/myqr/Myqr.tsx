import "./myqr.scss";
import { QRCodeSVG } from "qrcode.react";

export const Myqr = () => {
    
  return (
    <div className="page-myqr">
      <div className="qr-code">
        <QRCodeSVG value={"{userId=1}"} size={300} />
      </div>
      <label className="lbl-message">
        このQRコードを店舗で提示してください
      </label>
    </div>
  );
};

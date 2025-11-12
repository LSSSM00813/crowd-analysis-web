import "./myqr.scss"
import { QRCodeSVG } from "qrcode.react"

export const Myqr = () => {
    return (
        <div className="page-myqr">
            <QRCodeSVG value={"aaaa"} size={300} />
            <label className="lbl-message">このQRコードを店舗で提示してください</label>
        </div>
    )
}

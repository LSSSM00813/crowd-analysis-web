import "./myqr.scss"
import { QRCodeSVG } from "qrcode.react"

export const MyQR = () => {
    return (
        <div className="page-myqr">
            <QRCodeSVG value={"aaaa"} size={300} />
            <label className="lbl-message">このQRコードを店舗で提示してください</label>
        </div>
    )
}

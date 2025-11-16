import "./store.scss";
import { useLocation } from "react-router-dom";
import sampleData from "../../../assets/database/store.jsonc?raw";
import stripJsonComments from "strip-json-comments";
import photoFile from "../../../assets/database/photo/id_1.jpg";

const Store = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id");

  // 仮データ(json)からIdが一致するデータを取り出す
  const data: any[] = JSON.parse(stripJsonComments(sampleData));
  const displayData = data.find((obj) => {
    return obj.id == id;
  });

  return (
    <div className="page-store">
      <img src={photoFile} />

      <div className="content">
        <h1 className="title">{displayData.store_name}</h1>

        <h2>現在の混雑状況</h2>
        <div>
          <div>男の画像</div>
          <div>空いている</div>
        </div>

        <h2>料金</h2>
        <div>■大人 (中学生以上)</div>
        <div>　平日 1,200円 / 土曜・休日 1,500円</div>
        <div>■子ども (4歳～小学生)</div>
        <div>　平日 1,200円 / 土曜・休日 1,500円</div>
        <div>■入館回数券</div>
        <div>　10回分 11,000円 (有効期限: 購入日より1年間)</div>
        <div>■岩盤浴料金</div>
        <div>　平日 500円/ 土曜・休日 600円</div>
        <div>　(フリータイム制/ 大判タオル・岩盤浴付)</div>

        <h2>営業時間</h2>
        <div>月曜日: 10:00 ~ 02:00</div>
        <div>火曜日: 10:00 ~ 02:00</div>
        <div>水曜日: 定休日</div>
        <div>木曜日: 10:00 ~ 02:00</div>
        <div>金曜日: 10:00 ~ 02:00</div>
        <div>土曜日: 10:00 ~ 02:00</div>
        <div>日曜日: 10:00 ~ 02:00</div>
      </div>
    </div>
  );
};

export default Store;

import { useState } from "react";
import "./storeCard.scss";
import photoFile from "../../assets/database/photo/id_1.jpg";
import {
  MdOutlineStar,
  MdOutlineStarBorder,
  MdOutlineImageNotSupported,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface StoreCardProps {
  id?: number;
  title: string;
  isFavorite?: boolean;
}

const StoreCard = (props: StoreCardProps) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(props.isFavorite ?? false);

  return (
    <div
      className="store-card"
      onClick={() => navigate(`/user/store?id=${props.id ?? 0}`)}
    >
      <div className="flex-box">
        <div className="left">
          <div className="title">{props.title ?? "[店舗名]"}</div>
          <div className="store-info">
            <div>
              <div>■混雑</div>
              <div>　★★★★☆</div>
            </div>

            <div>
              <div>■営業時間</div>
              <div>　10:00 ～ 02:00</div>
            </div>
            <div>
              <div>■入館料</div>
              <div>　大人　：1,500円</div>
              <div>　子ども：1,200円</div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="store-image">
            <img src={photoFile} />
            {/* <MdOutlineImageNotSupported />
            <div>No Image</div> */}
          </div>

          <div
            className={
              "favorite-icon | " +
              (isFavorite ? "favorite-true" : "favorite-false")
            }
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
              setIsFavorite(!isFavorite);
            }}
          >
            {isFavorite ? <MdOutlineStar /> : <MdOutlineStarBorder />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;

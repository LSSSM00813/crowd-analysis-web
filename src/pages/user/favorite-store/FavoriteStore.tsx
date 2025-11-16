import { MdSearch } from "react-icons/md";
import "./favoriteStore.scss";
import sampleData from "../../../assets/database/store.jsonc?raw";
import stripJsonComments from "strip-json-comments";
import { useState } from "react";
import StoreCard from "../../../components/StoreCard/StoreCard";

const FavoriteStore = () => {
  const [searchText, setSearchText] = useState("");
  const searchWords: string[] = searchText.split(" ");

  const data: any[] = JSON.parse(stripJsonComments(sampleData));

  return (
    <div className="page-favorite-store">
      <div className="main-content">
        <div className="search-input-area">
          <MdSearch />
          <input
            type="text"
            placeholder="検索"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>

        <div className="store-cards">
          {data?.map((x: any) => {
            // お気に入り登録されていなかったらnullで何も表示させない
            if (!x.isFavorite) return null;
            
            const storeName = x.store_name?.toLowerCase() ?? "";

            let matched;
            if (!searchText) {
              // 検索になにも表示されていない場合はすべてを表示する
              matched = true;
            } else {
              matched = searchWords.some(
                (word) => word && storeName.includes(word)
              );
            }

            return matched ? (
              <StoreCard
                key={x.id}
                id={x.id}
                title={x.store_name}
                isFavorite={x.isFavorite}
              />
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default FavoriteStore;

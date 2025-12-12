import { useState } from "react";
import "./enterPage2a.scss";
import { TabletFotter } from "../../component/tablet-fotter/TabletFotter";

const EnterPage2a = () => {
  const [selectedGender, setSlectedGender] = useState("man");
  const [selectedAgeCategory, setSelectedAgeCategory] = useState("adult");

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSlectedGender(event.target.value);
  };

  const handleAgeCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAgeCategory(event.target.value);
  };


  return (
    <div className="page-enter-2a">
      <h2>顧客情報を入力してください</h2>

      <div className="flex-box">
        <div className="flex-left">
          <div className="input-gender">
            <div>
              <input type="radio" name="gender" value="man" checked={selectedGender === "man"} onChange={handleGenderChange} />
              <label>男性</label>
            </div>
            <div>
              <input type="radio" name="gender" value="woman" checked={selectedGender === "woman"} onChange={handleGenderChange} />
              <label>女性</label>
            </div>
            <div>
              <input type="radio" name="gender" value="other" checked={selectedGender === "other"} onChange={handleGenderChange} />
              <label>その他</label>
            </div>
          </div>

          <div className="input-age-category">
            <div>
              <input type="radio" name="age-category" value="adult" checked={selectedAgeCategory === "adult"} onChange={handleAgeCategoryChange} />
              <label>大人</label>
            </div>
            <div>
              <input type="radio" name="age-category" value="child" checked={selectedAgeCategory === "child"} onChange={handleAgeCategoryChange} />
              <label>子供</label>
            </div>
          </div>

          <div className="input-key-number">
            <div>鍵番号</div>
            <input type="text" placeholder="A123" />
          </div>

          <div className="btn-add">
            <button>追加</button>
          </div>

        </div>

        <div className="flex-right">
          <div className="list">
            <div>１.　A123 男性 大人</div>
          </div>
          <div className="btn-delete-edit">
            <button>削除</button>
            <button>編集</button>
          </div>
        </div>
      </div>
      <TabletFotter />
    </div>
  );
};

export default EnterPage2a;

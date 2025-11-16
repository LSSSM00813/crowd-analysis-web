import "./userSetting.scss";

export const UserSetting = () => {
  return (
    <div className="page-user-setting">
      <h1 className="lbl-title">設定・編集</h1>
      <h2>性別</h2>
      <select>
        <option value="male">男性</option>
        <option value="female">女性</option>
        <option value="other">その他</option>
      </select>

      <h2>年齢</h2>
      <select>
        {Array.from({ length: 90 }, (_, i) => (
          <option key={i + 10} value={i + 10}>
            {i + 10}
          </option>
        ))}
      </select>

      <h2>居住地(都道府県)</h2>
      <select>
        <option value="tokyo">東京都</option>
        <option value="osaka">大阪府</option>
        <option value="aichi">愛知県</option>
      </select>

      <button className="btn-save">保存</button>
    </div>
  );
};

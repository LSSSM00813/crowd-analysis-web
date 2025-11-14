import "./setting.scss"

export const UserSetting = () => {
  return (
    <div className="page-user-setting">
      <label className="lbl-title">設定・編集</label>
      <div>性別</div>
      <select>
        <option value="male">男性</option>
        <option value="female">女性</option>
        <option value="other">その他</option>
      </select>
      <div>年齢</div>
      <select>
        <option value="male">男性</option>
        <option value="female">女性</option>
        <option value="other">その他</option>
      </select>
      <div>居住地(都道府県)</div>
      <select>
        <option value="tokyo">東京都</option>
        <option value="osaka">大阪府</option>
        <option value="aichi">愛知県</option>
      </select>

      <button className="btn-save">保存</button>
    </div>
  )
}

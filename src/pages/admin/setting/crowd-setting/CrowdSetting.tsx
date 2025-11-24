import "./crowdSetting.scss";

const CrowdSetting = () => {
  return (
    <div className="page-crowd-setting">
      <div>混雑設定</div>
      <div>
        混雑設定ID
        <br />
        定員数
        <br />
        満員数
        <br />
        閾値（〇％）
        <br />
        メール通知はするか？
        <br />
      </div>

      <table>
        <tbody>
          <tr>
            <td>混雑設定ID</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>
              代表者名または
              <br />
              業務責任者社名
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>
              特定商取引法に基づく
              <br />
              表記に関する同意
            </td>
            <td>
              <label>
                <input type="checkbox" />
                同意する
              </label>
            </td>
          </tr>
          <tr>
            <td>
              情報連絡用
              <br />
              メールアドレス
            </td>
            <td>
              <input type="email" />
              <input type="email" />
              <input type="email" />
              <input type="email" />
            </td>
          </tr>
          <tr>
            <td>電話番号</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>郵便番号</td>
            <td>
              <input type="text" />
              <div>-</div>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>住所</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>施設の入力</td>
            <td>
              <label>
                <input type="radio" name="facility" value="大浴場" />
                大浴場
              </label>
              <label>
                <input type="radio" name="facility" value="露天風呂" />
                露天風呂
              </label>
              <label>
                <input type="radio" name="facility" value="サウナ" />
                サウナ
              </label>
              <label>
                <input type="radio" name="facility" value="岩盤浴" />
                岩盤浴
              </label>
            </td>
          </tr>
          <tr>
            <td>○○</td>
            <td></td>
          </tr>
          <tr>
            <td>○○</td>
            <td></td>
          </tr>
          <tr>
            <td>○○</td>
            <td></td>
          </tr>
          <tr>
            <td>○○</td>
            <td></td>
          </tr>
          <tr>
            <td>○○</td>
            <td></td>
          </tr>
          <tr>
            <td>○○</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default CrowdSetting;

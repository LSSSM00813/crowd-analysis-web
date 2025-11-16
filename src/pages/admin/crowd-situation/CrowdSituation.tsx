import CrowdLevelBar from "../../../components/CrowdLevelBar/CrowdLevelBar";
import CrowdStatusPanel from "../../../components/CrowdStatusPanel/CrowdStatusPanel";
import { formatDate } from "../../../util/formatDate";
import { MdMan } from "react-icons/md";
import { MdWoman } from "react-icons/md";
import "./crowdSituation.scss";

const CrowdSituation = () => {
  const now = new Date();

  return (
    <div className="page-crowd-situation">
      <div>最新の混雑状況</div>
      <div>{formatDate(now, "YYYY年M月D日(曜)")}</div>

      <CrowdLevelBar />

      <div className="crowd-status-panels">
        <CrowdStatusPanel
          title="館内"
          color="#A15E00"
          icon={<MdMan />}
          status="empty"
        />
        <CrowdStatusPanel
          title="館内"
          color="#007EA1"
          icon={<MdMan />}
          status="empty"
        />
        <CrowdStatusPanel
          title="女湯"
          color="#CD4545"
          icon={<MdWoman />}
          status="crowded"
        />
      </div>

      {/* サンプル */}
      <table style={{ width: 100 + "%", marginTop: 20 + "px" }}>
        <tr style={{ background: "#f0f0f0" }}>
          <th>場所</th>
          <th>営業時間</th>
        </tr>
        <tr>
          <td>館内</td>
          <td>10:00～24:00 (最終受付 22:00)</td>
        </tr>
        <tr>
          <td>男湯</td>
          <td>10:00～24:00 (最終受付 22:00)</td>
        </tr>
        <tr>
          <td>女湯</td>
          <td>10:00～24:00 (最終受付 22:00)</td>
        </tr>
        <tr>
          <td>サウナ</td>
          <td>10:00～24:00 (最終受付 22:00)</td>
        </tr>
        <tr>
          <td>露天風呂</td>
          <td>10:00～24:00 (最終受付 22:00)</td>
        </tr>        
      </table>
    </div>
  );
};

export default CrowdSituation;

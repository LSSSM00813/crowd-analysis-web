import "./crowdLevelBar.scss";
import CrowdLevelBarItem from "./CrowdLevelBarItem";

const CrowdLevelBar = () => {
  return (
    <div className="crowd-level-bar">
      <div className="lbl-empty">空</div>
      <CrowdLevelBarItem color="#229DB5" />
      <CrowdLevelBarItem color="#52A42B" />
      <CrowdLevelBarItem color="#C6B147" />
      <CrowdLevelBarItem color="#E9801D" />
      <CrowdLevelBarItem color="#E91D1D" />
      <div className="lbl-crowd">混</div>
    </div>
  );
};

export default CrowdLevelBar;

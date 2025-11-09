import { MdMan } from "react-icons/md";
import "./crowdLevelBarItem.scss";

interface CrowdLevelBarItemProps {
  color: string;
}

const CrowdLevelBarItem = (props: CrowdLevelBarItemProps) => {
  return (
    <div className="crowd-level-bar-item">
      <MdMan style={{ color: props.color }} />
      {/* できればdivタグに要素をいれたくない */}
      <div style={{ background: props.color }}>　</div>
    </div>
  );
};

export default CrowdLevelBarItem;

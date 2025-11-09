import type { IconType } from "react-icons";
import "./crowdStatusPanel.scss";

interface CrowdStatusPanelProps {
  title: string;
  color: string;
  icon: React.ReactElement<IconType>;
  status: "empty" | "crowded";
}

const CrowdStatusPanel = (props: CrowdStatusPanelProps) => {
  const statusText = props.status === "empty" ? "空き" : "混雑";

  return (
    <div className="crowd-status-panel">
      
      <div className="title" style={{ background: props.color }}>
        {props.title}
      </div>
      
      <div className="icon" style={{ color: props.color }}>
        {props.icon}
      </div>

      <div className="status">{statusText}</div>
    </div>
  );
};

export default CrowdStatusPanel;

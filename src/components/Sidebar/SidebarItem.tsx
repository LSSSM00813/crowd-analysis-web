import type { IconType } from "react-icons";
import "./sidebarItem.scss";

export interface SidebarItemProps {
  title: string;
  icon: React.ReactElement<IconType>;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const SidebarItem = (props: SidebarItemProps) => {
  return (
    <div className="sidebar-item" onClick={(event) => props.onClick?.(event)}>
      {props.icon}
      <div>{props.title}</div>
    </div>
  );
};
export default SidebarItem;

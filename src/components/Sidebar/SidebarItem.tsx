import "./sidebarItem.scss";

interface SidebarItemProps {
  title: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const SidebarItem = (props: SidebarItemProps) => {
  return (
    <div className="sidebar-item">
      <div onClick={(event) => props.onClick?.(event)}>{props.title}</div>
    </div>
  );
};
export default SidebarItem;

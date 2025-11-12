import React from "react";
import "./sidebar.scss";
import SidebarItem, { type SidebarItemProps } from "./SidebarItem";

interface SidebarProps {
  mode: "user" | "admin";
  items: SidebarItemProps[];
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  // const backgroundColor = props.mode === "admin" ? "#333" : "#fff";
  const title = props.mode === "admin" ? "Admin Sidebar" : "User Sidebar";

  return (
    <div className="sidebar">
      <div className="sidebar-title">{title}</div>
      <li>
        {props.items?.map((item: SidebarItemProps) => (
          <SidebarItem          
            key={item.title}  // keyをしないとWarningが出るため追加
            title={item.title}
            icon={item.icon}
            onClick={item.onClick}
          />
        ))}
      </li>
    </div>
  );
};

export default Sidebar;

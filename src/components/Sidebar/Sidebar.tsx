import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import "./sidebar.scss";
import SidebarItem from "./SidebarItem";

interface SidebarProps {
  mode: "user" | "admin";
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { logout } = useAuth();

  // const backgroundColor = props.mode === "admin" ? "#333" : "#fff";
  const title = props.mode === "admin" ? "Admin Sidebar" : "User Sidebar";

  return (
    <div className="sidebar">
      <div className="sidebar-title">{title}</div>
      <li>
        <SidebarItem title="ダッシュボード" />
        <SidebarItem title="混雑状況" />
        <SidebarItem title="店舗情報設定" />
        <SidebarItem title="設定" />
        <SidebarItem title="ログアウト" onClick={logout} />
      </li>
    </div>
  );
};

export default Sidebar;

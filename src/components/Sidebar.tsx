import React from "react";
import { useAuth } from "../contexts/AuthContext";
import "./sidebar.scss";

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
        <div className="sidebar-item">ダッシュボード</div>
        <div className="sidebar-item">混雑状況</div>
        <div className="sidebar-item">店舗情報設定</div>
        <div className="sidebar-item">設定</div>
        <div className="sidebar-item" onClick={logout}>ログアウト</div>
      </li>
    </div>
  );
};

export default Sidebar;

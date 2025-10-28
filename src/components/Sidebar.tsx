import React from "react";
import { useAuth } from "../contexts/AuthContext";
<<<<<<< HEAD
import "./sidebar.scss";

interface SidebarProps {
  mode: "user" | "admin";
=======

interface SidebarProps {
  theme: "user" | "admin";
>>>>>>> b59f9719821dff53c067e2e41a21af75aa8e8c7c
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { logout } = useAuth();

<<<<<<< HEAD
  const backgroundColor = props.mode === "admin" ? "#333" : "#fff";
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
=======
  const backgroundColor = props.theme === "admin" ? "#333" : "#fff";
  const title = props.theme === "admin" ? "Admin Sidebar" : "User Sidebar";

  return (
    <div>
      <h2>{title}</h2>
      <div>{backgroundColor}</div>
      <button onClick={logout}>Logout</button>
>>>>>>> b59f9719821dff53c067e2e41a21af75aa8e8c7c
    </div>
  );
};

export default Sidebar;

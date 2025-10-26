import React from "react";
import { useAuth } from "../contexts/AuthContext";

interface SidebarProps {
  theme: "user" | "admin";
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { logout } = useAuth();

  const backgroundColor = props.theme === "admin" ? "#333" : "#fff";
  const title = props.theme === "admin" ? "Admin Sidebar" : "User Sidebar";

  return (
    <div>
      <h2>{title}</h2>
      <div>{backgroundColor}</div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Sidebar;

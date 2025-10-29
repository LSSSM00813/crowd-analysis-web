import { Outlet } from "react-router-dom";
import "./UserLayout.scss";
import Sidebar from "../../components/Sidebar";

const UserLayout: React.FC = () => (
  <div className="user-layout">
    <Sidebar mode="user" />
    <Outlet />
  </div>
);

export default UserLayout;
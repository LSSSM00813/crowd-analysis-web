import { Outlet } from "react-router-dom";
import "./UserLayout.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";

const UserLayout: React.FC = () => (
  <div className="user-layout">
    <div className="flex-box">
      <Sidebar mode="user" />
      <div className="content">
        <Outlet />
      </div>
    </div>
    <Footer />
  </div>
);

export default UserLayout;

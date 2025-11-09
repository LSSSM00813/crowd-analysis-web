import { Outlet } from "react-router-dom";
import "./UserLayout.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import { useAuth } from "../../contexts/AuthContext";
import { WiCloudy } from "react-icons/wi";

const UserLayout: React.FC = () => {
  const { logout } = useAuth();

  return (
    <div className="user-layout">
      <div className="flex-box">
        <Sidebar
          mode="user"
          items={[
            { title: "混雑状況", icon: <WiCloudy /> },
            { title: "店舗情報設定", icon: <WiCloudy /> },
            { title: "設定", icon: <WiCloudy /> },
            { title: "ログアウト", icon: <WiCloudy />, onClick: logout },
          ]}
        />

        <div className="content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default UserLayout;

import "./adminLayout.scss";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import { WiCloudy } from "react-icons/wi";
import { MdOutlineContentPasteSearch } from "react-icons/md";

const AdminLayout: React.FC = () => {
  return (
    <div className="admin-layout">
      <div className="flex-box">
        <Sidebar
          mode="admin"
          items={[
            { title: "混雑状況", icon: <WiCloudy /> },
            { title: "混雑データ", icon: <WiCloudy /> },
            { title: "管理用", icon: <MdOutlineContentPasteSearch /> },
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

export default AdminLayout;

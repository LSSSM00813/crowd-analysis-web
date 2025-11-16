import "./adminLayout.scss";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { WiCloudy } from "react-icons/wi";
import { MdOutlineContentPasteSearch, MdOutlineLogout } from "react-icons/md";
import { BsClipboard2Data } from "react-icons/bs";

const AdminLayout: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-layout">
      <div className="flex-box">
        <Sidebar
          mode="admin"
          items={[
            {
              title: "混雑状況",
              icon: <WiCloudy />,
              onClick: () => navigate("/admin/crowd-situation"),
            },
            { title: "混雑データ", icon: <BsClipboard2Data /> },
            { title: "管理用", icon: <MdOutlineContentPasteSearch /> },
            {
              title: "ログアウト",
              icon: <MdOutlineLogout />,
              onClick: () => navigate("/login"),
            },
          ]}
        />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;

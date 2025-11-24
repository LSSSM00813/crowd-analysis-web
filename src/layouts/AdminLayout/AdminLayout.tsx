import "./adminLayout.scss";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { WiCloudy } from "react-icons/wi";
import { MdOutlineContentPasteSearch, MdOutlineLogout, MdSettings } from "react-icons/md";
import { BsClipboard2Data } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";

const AdminLayout: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-layout">
      <div className="layout-flex-box">
        <Sidebar
          mode="admin"
          items={[
            {
              title: "混雑状況",
              icon: <WiCloudy />,
              onClick: () => navigate("/admin/crowd-situation"),
            },
            {
              title: "混雑データ",
              icon: <BsClipboard2Data />,
              onClick: () => navigate("/admin/crowd-data"),
            },
            {
              title: "店舗設定",
              icon: <MdSettings />,
              onClick: () => navigate("/admin/setting/store-setting"),
            },
            {
              title: "混雑設定",
              icon: <MdOutlineContentPasteSearch />,
              onClick: () => navigate("/admin/setting/crowd-setting"),
            },
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

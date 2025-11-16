import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./UserLayout.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import {
  MdQrCode,
  MdStore,
  MdOutlineStar,
  MdSettings,
  MdOutlineLogout,
} from "react-icons/md";

import { Header } from "../../components/Header/Header";
import { useEffect } from "react";

const UserLayout: React.FC = () => {
  const navigate = useNavigate();

  // 2025/11/16 SPAだとページ遷移をしてもscroll位置がリセットされないため
  const ScrollTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
      console.debug(pathname);
    }, [pathname]);
  };

  ScrollTop();

  return (
    <div className="user-layout">
      <Header />

      <div className="layout-flex-box">
        <Sidebar
          mode="user"
          items={[
            {
              title: "QRコード",
              icon: <MdQrCode />,
              onClick: () => navigate("/user/myqr"),
            },
            {
              title: "店舗一覧",
              icon: <MdStore />,
              onClick: () => navigate("/user/search"),
            },
            {
              title: "お気に入り店舗",
              icon: <MdOutlineStar />,
              onClick: () => navigate("/user/favorite-store"),
            },
            {
              title: "ユーザー設定",
              icon: <MdSettings />,
              onClick: () => navigate("/user/setting"),
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

      <Footer
        items={[
          {
            title: "QRコード",
            icon: <MdQrCode />,
            onClick: () => navigate("/user/myqr"),
          },
          {
            title: "店舗一覧",
            icon: <MdStore />,
            onClick: () => navigate("/user/search"),
          },
          {
            title: "お気に入り店舗",
            icon: <MdOutlineStar />,
            onClick: () => navigate("/user/favorite-store"),
          },
        ]}
      />
    </div>
  );
};
export default UserLayout;

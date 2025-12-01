import { TabletFotter } from "../../pages/store-tablet/component/tablet-fotter/TabletFotter";
import "./storeTabletLayout.scss"
import { Outlet } from "react-router-dom";

const StoreTabletLayout: React.FC = () => {
  return (
    <div className="store-tablet-layout">
      <div className="content">
        <Outlet />
      </div>
      <TabletFotter />
    </div>
  );
};

export default StoreTabletLayout;

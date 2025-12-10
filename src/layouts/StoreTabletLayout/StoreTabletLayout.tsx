import "./storeTabletLayout.scss"
import { Outlet } from "react-router-dom";

const StoreTabletLayout: React.FC = () => {
  return (
    <div className="store-tablet-layout">
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default StoreTabletLayout;

import "./storeTabletLayout.scss"
import { Outlet } from "react-router-dom";

const StoreTabletLayout: React.FC = () => {
  return (
    <div className="store-tablet-layout">
      <Outlet />
    </div>
  );
};

export default StoreTabletLayout;

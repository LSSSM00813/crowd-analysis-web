import { Outlet } from "react-router-dom";

const AdminLayout: React.FC = () => {
  return (
    <>
      <div>AdminLayout</div>
      <Outlet />
    </>
  );
};

export default AdminLayout;

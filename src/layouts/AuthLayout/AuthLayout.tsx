import { Outlet } from "react-router-dom";
import "./AuthLayout.scss";

const AuthLayout: React.FC = () => (
  <div className="auth-layout">
    <Outlet />
  </div>

);

export default AuthLayout;

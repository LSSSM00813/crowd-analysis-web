import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";
import React from "react";

interface RequireAuthProps {
  children: React.ReactElement;
}

const RequireAuth: React.FC<RequireAuthProps> = (props) => {
  const { isAuthenticated, login } = useAuth();
  const location = useLocation();

  const token = localStorage.getItem("authToken");
  if (token) {
    login();
  }

  // 認証されていない場合、ログインページへリダイレクト
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return props.children;
};

export default RequireAuth;

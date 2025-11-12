import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import React from "react";

interface RequireAuthProps {
  children: React.ReactElement;
  ignoreAuth?: boolean;
}

const RequireAuth: React.FC<RequireAuthProps> = (props) => {
  const _ignoreAuth = props.ignoreAuth ?? false;

  const { isAuthenticated, login } = useAuth();
  const location = useLocation();

  const token = localStorage.getItem("authToken");
  if (token) {
    login();
  }

  console.log("RequireAuth: isAuthenticated =", isAuthenticated);
  console.log("RequireAuth: ignoreAuth =", _ignoreAuth);

  // 認証されていない場合、ログインページへリダイレクト
  if (!isAuthenticated && !_ignoreAuth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return props.children;
};

export default RequireAuth;

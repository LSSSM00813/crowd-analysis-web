// AppRouter.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import { AuthProvider } from "../contexts/AuthContext";
import RequireAuth from "../contexts/RequireAuth";
import UserLayout from "../layouts/UserLayout/UserLayout";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import Dashboard from "../pages/user/Dashboard";
import Setting from "../pages/admin/Setting";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import CrowdSituation from "../pages/admin/crowd-situation/CrowdSituation";

export default function AppRouter(): React.JSX.Element {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* ログイン */}
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
          </Route>

          {/* ユーザー用ルーティング */}
          <Route path="/user" element={<UserLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>

          {/* 管理者用ルーティング */}
          <Route
            path="/admin"
            element={
              <RequireAuth>
                <AdminLayout />
              </RequireAuth>
            }
          >
            <Route index element={<CrowdSituation />} />
            <Route path="crowd-situation" element={<CrowdSituation />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

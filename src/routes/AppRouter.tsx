// AppRouter.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import { AuthProvider } from "../contexts/AuthContext";
import RequireAuth from "../contexts/RequireAuth";
import UserLayout from "../layout/UserLayout";
import AdminLayout from "../layout/AdminLayout";
import Dashboard from "../pages/user/Dashboard";
import Setting from "../pages/admin/Setting";

export default function AppRouter(): React.JSX.Element {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* ルートアクセス時のリダイレクト */}
          <Route path="/" element={<Login />} />

          {/* ログインページ */}
          <Route path="/login" element={<Login />} />

          {/* ユーザー用ルーティング */}
          <Route
            path="/user"
            element={
              <RequireAuth>
                <UserLayout />
              </RequireAuth>
            }
          >
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
            <Route path="setting" element={<Setting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

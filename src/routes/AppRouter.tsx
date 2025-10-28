// AppRouter.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import { AuthProvider } from "../contexts/AuthContext";
import RequireAuth from "../contexts/RequireAuth";
<<<<<<< HEAD
import UserLayout from "../layouts/UserLayout/UserLayout";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import Dashboard from "../pages/user/Dashboard";
import Setting from "../pages/admin/Setting";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
=======
import UserLayout from "../layout/UserLayout";
import AdminLayout from "../layout/AdminLayout";
import Dashboard from "../pages/user/Dashboard";
import Setting from "../pages/admin/Setting";
>>>>>>> b59f9719821dff53c067e2e41a21af75aa8e8c7c

export default function AppRouter(): React.JSX.Element {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD

          {/* ログイン */}
          <Route path="/" element={<AuthLayout />} >
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
          </Route>

          {/* ユーザー用ルーティング */}
          <Route path="/user" element={<UserLayout />}>
            <Route index element={<Dashboard />} />
=======
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
>>>>>>> b59f9719821dff53c067e2e41a21af75aa8e8c7c
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

// AppRouter.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import { AuthProvider } from "../contexts/AuthContextProvider";
import RequireAuth from "../contexts/RequireAuth";
import UserLayout from "../layouts/UserLayout/UserLayout";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import Dashboard from "../pages/user/dashboard/Dashboard";
import Setting from "../pages/admin/Setting";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import CrowdSituation from "../pages/admin/crowd-situation/CrowdSituation";
import { Search } from "../pages/user/search/Search";
import { Myqr } from "../pages/user/myqr/Myqr";
import { UserSetting } from "../pages/user/setting/UserSetting";
import FavoriteStore from "../pages/user/favorite-store/FavoriteStore";
import Store from "../pages/user/store/Store";

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
            <Route index element={<Myqr />} />
            <Route path="search" element={<Search />} />

            <Route path="search/store" element={<Store />} />
            <Route path="store" element={<Store />} />

            <Route path="myqr" element={<Myqr />} />
            <Route path="favorite-store" element={<FavoriteStore />} />
            <Route path="setting" element={<UserSetting />} />
            {/* Dashboardはいずれ消す */}
            <Route path="dashboard" element={<Dashboard />} />
          </Route>

          {/* 管理者用ルーティング */}
          <Route
            path="/admin"
            element={
              <RequireAuth ignoreAuth={true}>
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

import { useAuth } from "../../contexts/AuthContext";

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <>
      <div>ダッシュボード</div>
      <button onClick={logout}>ログアウト</button>
    </>
  );
};

export default Dashboard;

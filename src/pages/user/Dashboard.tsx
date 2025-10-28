<<<<<<< HEAD
const Dashboard = () => {
  return (
    <>
      <div>
        ダッシュボード
      </div>
=======
import { useAuth } from "../../contexts/AuthContext";

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <>
      <div>ダッシュボード</div>
      <button onClick={logout}>ログアウト</button>
>>>>>>> b59f9719821dff53c067e2e41a21af75aa8e8c7c
    </>
  );
};

export default Dashboard;

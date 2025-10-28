import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./login.scss";
import { INFO } from "../../util/logger";

function Login() {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent) => {
    login();
    if (isAuthenticated) {
      INFO("navigate to /user/dashboard");
      navigate("/user/dashboard");
    }
    event?.preventDefault();
  };

  return (
    <>
      <div className="login-page">
<<<<<<< HEAD
        <div>
          <label>ログイン</label>
          <form onSubmit={handleLogin}>
            <div>
              <input className="input-username" type="text" placeholder="ユーザID" />
            </div>
            <div>
              <input className="input-password" type="password" placeholder="パスワード" />
            </div>
            <div>
              <input className="btn-login" type="submit" value="ログイン" />
            </div>
          </form>
          <label>© SHARP CORPORATION</label>
        </div>
=======
        <div>ログイン</div>

        <form onSubmit={handleLogin}>
          <div>
            <input className="input-username" type="text" placeholder="ユーザID" />
          </div>
          <div>
            <input className="input-password" type="password" placeholder="パスワード" />
          </div>
          <div>
            <input className="btn-login" type="submit" value="ログイン" />
          </div>
        </form>
>>>>>>> b59f9719821dff53c067e2e41a21af75aa8e8c7c
      </div>
    </>
  );
}

export default Login;

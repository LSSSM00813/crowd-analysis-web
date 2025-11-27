import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import "./login.scss";
import { INFO } from "../../util/logger";
import { MdOutlineArrowRight } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import ApiContoller from "../../util/Api/ApiController";
import type { ApiBase } from "../../util/Api/ApiModels/ApiBase";

function Login() {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  // ユーザー画面へ遷移
  const PageToUser = (event: React.FormEvent) => {
    login();
    if (isAuthenticated) {
      INFO("navigate to /user/myqr");
      navigate("/user/myqr");
    }
    event?.preventDefault();
  };

  // 管理者画面へ遷移
  const PageToAdmin = (event: React.FormEvent) => {
    login();
    if (isAuthenticated) {
      INFO("navigate to /admin/dashboard");
      navigate("/admin");
    }
    event?.preventDefault();
  };

  const PageToStoreTablet = (event: React.FormEvent) => {
    login();
    if (isAuthenticated) {
      INFO("navigate to /store-tablet/pageInit");
      navigate("/store-tablet/pageInit");
    }
    event?.preventDefault();
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="page-login">
      <div className="login-container">
        <form onSubmit={PageToUser}>
          <label className="lbl-login">ログイン</label>

          <label>ユーザーID</label>
          <input className="input-username" type="text" required />

          <label>パスワード</label>
          <div className="input-password-container">
            <input
              className="input-password"
              required
              type={isPasswordVisible ? "text" : "password"}
            />

            {isPasswordVisible ? (
              <FaEyeSlash onClick={() => setIsPasswordVisible(false)} />
            ) : (
              <FaEye onClick={() => setIsPasswordVisible(true)} />
            )}
          </div>

          <div className="link-forgot-password">
            <Link to="/user" className="link-forgot-password">
              パスワードをお忘れですか?
            </Link>
          </div>

          <label className="check-remember">
            <input type="checkbox" />
            ログイン情報を記録する
          </label>

          <div className="btn-login-container">
            <button className="btn-login" type="submit">
              ログイン
            </button>
            <MdOutlineArrowRight />
          </div>
        </form>

        <button className="btn-goto-admin" onClick={(e) => PageToAdmin(e)}>
          管理者画面へ
        </button>

        <button style={{ marginTop:"10px",width: "100%" }}
        onClick={() => {
          ApiContoller.GetResult().then((apiBase: ApiBase) => {
            console.log(apiBase.result);
          }, (error) => {
            alert("API Error:" + error);
          });
        }}>

        APIテスト用
      </button>

      {/* <button
          className="btn-goto-store-tablet"
          onClick={(e) => PageToStoreTablet(e)}
        >
          店舗用タブレット画面
        </button> */}
    </div>
    </div >
  );
}

export default Login;

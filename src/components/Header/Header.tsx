import { useState } from "react";
import "./Header.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="header-content">
        <div className="header-left"></div>
        <div className="header-center">
          <div>新規プロジェクトDemo</div>
        </div>
        <div className="header-right">
          <button
            className="btn-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="menu-content">
          <div>
            <Link to={"/login"}>ログイン/ログアウト</Link>
          </div>
          <div>
            <Link to={"/user/setting"}>ユーザー設定</Link>
          </div>
        </div>
      )}
    </div>
  );
};

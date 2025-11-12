import { useState } from "react";
import "./Header.scss"
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="header">
            <div className="header-content">
                <div className="header-left"></div>
                <div className="header-center">
                    <div>Header</div>
                </div>
                <div className="header-right">
                    <button className="btn-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <GiHamburgerMenu />
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="menu-content">
                    <div>ログイン</div>
                    <div>新規登録</div>
                </div>
            )}
        </div>
    )
}

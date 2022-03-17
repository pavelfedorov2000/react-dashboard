import React from "react";
import Logo from '../Logo/Logo';
import NavMenu from '../NavMenu/NavMenu';
import HeaderUser from "./HeaderUser";
import './AppHeader.scss';

class AppHeader extends React.Component {
    render() {
        return (
            <header className="header">
                <Logo />
                <div className="header__inner">
                    <NavMenu />
                    <HeaderUser />
                </div>
            </header>
        );
    }
}

export default AppHeader;
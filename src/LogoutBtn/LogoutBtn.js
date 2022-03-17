import React from "react";
import './LogoutBtn.scss';

class LogoutBtn extends React.Component {
    render() {
        return (
            <button className="logout-btn nav-btn" type="button">
                <img src="img/icons/logout.svg" alt="иконка выхода" />
            </button>
        );
    }
}

export default LogoutBtn;
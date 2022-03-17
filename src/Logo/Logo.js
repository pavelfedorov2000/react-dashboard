import React from "react";
import './Logo.scss';

class Logo extends React.Component {
    render() {
        return (
            <a href="#" className="logo">
                <img src="img/logo/logo.svg" alt="logo" className="logo__img" />
            </a>
        );
    }
}

export default Logo;
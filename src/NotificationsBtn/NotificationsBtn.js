import React from "react";
import './NotificationsBtn.scss';

class NotificationsBtn extends React.Component {
    render() {
        return (
            <button className="notifications-btn" style={{ backgroundImage: 'url(img/icons/bell.svg)' }}></button>
        );
    }
}

export default NotificationsBtn;
import React, { Component } from "react";
import NotificationsBtn from '../NotificationsBtn/NotificationsBtn';
import Avatar from '../Avatar/Avatar';
import UserSelect from '../UserSelect/UserSelect';
import BurgerBtn from '../BurgerBtn/BurgerBtn';

class HeaderUser extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.state = {
            user: 0
        };
    }
    handleSelectChange(user) {
        this.setState({ user });
    }
    render() {
        const user = this.state.user;
        return (
            <div className="header__user">
                <NotificationsBtn />
                <Avatar user={user} />
                <UserSelect user={user} onSelectChange={this.handleSelectChange} />
                <BurgerBtn />
            </div>
        );
    }
}
 
export default HeaderUser;
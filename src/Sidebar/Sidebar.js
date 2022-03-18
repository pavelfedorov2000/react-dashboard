import React from "react";
import SidebarNav from '../SidebarNav/SidebarNav';
import LogoutBtn from '../LogoutBtn/LogoutBtn';
import './Sidebar.scss';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <SidebarNav />
        <LogoutBtn />
      </div>
    );
  }
}

export default Sidebar;
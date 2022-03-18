import React from "react";
import './SidebarNav.scss';

class SidebarNav extends React.Component {
  render() {
    const navButtons = [];
    for (let i = 1; i < 6; i++) {
      navButtons.push(`img/icons/nav/0${i}.svg`);
    }
    return (
      <nav className="sidebar__nav">
        {
          navButtons.map((btn, i) =>
            <a href="#" className="nav-btn" key={`btn-${i}`}>
              <img src={btn} alt="icon" />
            </a>
          )
        }
      </nav>
    );
  }
}

export default SidebarNav;
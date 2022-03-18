import React from "react";
import './NavMenu.scss';

class NavMenu extends React.Component {
  render() {
    const navLinks = ['Dashboard', 'Message', 'Help'];
    let [activeLink, ...rest] = navLinks;
    return (
      <nav className="nav-menu header__nav">
        <ul className="nav-menu__list">
          <li className="nav-menu__item">
            <a href="#" className="nav-menu__link nav-menu__link--active">{activeLink}</a>
          </li>
          {
            rest.map((navLink, i) =>
              <li className="nav-menu__item" key={`link-${i}`}>
                <a href="#" className="nav-menu__link">{navLink}</a>
              </li>
            )
          }
        </ul>
      </nav>
    );
  }
}

export default NavMenu;
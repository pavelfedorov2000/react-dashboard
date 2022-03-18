import React from "react";
import './BurgerMenu.scss';
import SidebarNav from '../SidebarNav/SidebarNav';
import NavMenu from '../NavMenu/NavMenu';

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);
    //this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  render() {
    const isMenuOpen = this.props.isMenuOpen;
    return (
      <div className={isMenuOpen ? 'burger-menu burger-menu--active' : 'burger-menu'} >
        <NavMenu />
        <SidebarNav />
      </div>
    )
  }
}

export default BurgerMenu;
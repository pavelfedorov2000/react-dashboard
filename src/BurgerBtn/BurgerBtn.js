import React from "react";
import './BurgerBtn.scss';

class BurgerBtn extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
  }
  handleToggleMenu(isMenuOpen) {
    this.props.toggleMenu(!isMenuOpen);
  }

  render() {
    const isMenuOpen = this.props.isMenuOpen;
    //
    return (
      <button className={isMenuOpen ? 'burger-btn' : 'burger-btn burger-btn--active'} onClick={this.handleToggleMenu} type="button">
        <span></span>
        <span></span>
        <span></span>
      </button>
    );
  }
}

export default BurgerBtn;
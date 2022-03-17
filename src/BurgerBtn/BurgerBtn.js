import React from "react";
import './BurgerBtn.scss';

class BurgerBtn extends React.Component {
    /* constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }
    function clickHandler() {
        this.props.onMenuChange(!isMenuOpen);
    } */
    render() {
        /* const burgerBtn = document.querySelector('.burger-btn');
        const burgerMenu = document.querySelector('.burger-menu');
        burgerBtn.addEventListener('click', () => {
            burgerBtn.classList.toggle('burger-btn--active');
            burgerMenu.classList.toggle('burger-menu--active');
            document.querySelector('body').classList.toggle('_locked');
        }); */
        //const isMenuOpen = this.props.isMenuOpen;
        //className={!isMenuOpen ? 'burger-btn' : 'burger-btn burger-btn--active'} onClick={clickHandler}
        return (
            <button className="burger-btn">
                <span></span>
                <span></span>
                <span></span>
            </button>
        );
    }
}

export default BurgerBtn;
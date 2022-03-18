import React from 'react';
import ReactDOM from 'react-dom';
import './base/_general.scss';
import AppHeader from './AppHeader/AppHeader';
import Sidebar from './Sidebar/Sidebar';
import AppContent from './AppContent/AppContent';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import './BurgerBtn/BurgerBtn.scss';
//import BurgerBtn from './BurgerBtn/BurgerBtn';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  render() {
    let isMenuOpen = this.state.isMenuOpen;
    return (
      <div className={isMenuOpen ? 'app _lock' : 'app'}>
        <BurgerMenu isMenuOpen={isMenuOpen} />
        <button className={isMenuOpen ? 'burger-btn burger-btn--active' : 'burger-btn'} onClick={() => this.setState({ isMenuOpen: !isMenuOpen })} type="button">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <AppHeader />
        <Sidebar />
        <AppContent />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

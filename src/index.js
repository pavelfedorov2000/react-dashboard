import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppHeader from './AppHeader/AppHeader';
import Sidebar from './Sidebar/Sidebar';
import AppContent from './AppContent/AppContent';

class App extends React.Component {
    /* constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
            //toggleMenu: () => {},
        };
    }
    toggleMenuMode() {
        this.setState({
            isMenuOpen: !isMenuOpen,
        });
    } */
    render() {
        //const isMenuOpen = this.state.isMenuOpen;
        return(
            <div className="app">
                <AppHeader />
                <Sidebar />
                <AppContent />
            </div>
        );
    }
} 

ReactDOM.render(<App />, document.getElementById('root'));

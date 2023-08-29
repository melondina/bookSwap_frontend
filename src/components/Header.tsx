import React from 'react';
import startPage from '../assets/img/startPage.png';
import logo from '../assets/img/logo.png';



const Header: React.FC = () => {
    

return (
    <div className="header">
        <div className='header-top'>
            <img width="10%" src={logo} alt="logo" />
            <div>
            <button>Log In</button>
            <button>Sign In</button>
            </div>
        </div>
        <div className="container">
        <div className="header__logo">
            <img width="100%" src={startPage} alt="Start page" />
            Connect, Share, Immerse
        </div>
    </div>
    </div>
    );      
}

export default Header;
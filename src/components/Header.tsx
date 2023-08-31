import React from 'react';
import logo from '../assets/img/logo.png';



const Header: React.FC = () => {
    

return (
    <div className="header">
        <div className="container">
        <div className='header-top'>
            <img width="15%" src={logo} alt="logo" />
            <div>
            <button className='button'>Login</button>
            <button className='button'>Sign In</button>
            </div>
        </div>
        <div className="header-bottom">
            <h1 className="header-bottom_title">
            Connect, Share, Immerse
            </h1>
            <p className='header-bottom_desc'>
            Words Shared, Worlds Explored
            </p>
        </div>
    </div>
    </div>
    );      
}

export default Header;
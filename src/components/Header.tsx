import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';



const Header: React.FC = () => {

    const user = useSelector(state => state.user.user);
    console.log("userHeader", user);



   
return (
    <div className="header">
        <div className="container">
        <div className='header-top'>
        <Link to="/">
        <img width="100%" src={logo} alt="logo" />
            </Link>

        <div className='header-links'>
            {user===null ? 
            <>
                        <Link to="/login" className='links'>
                Login
            </Link>
            <Link to="/registration" className='links'>
                Sign Up
            </Link>

            </>


             :
             <>
                         <Link to="/library" className='links'>
            My library
        </Link>
        <Link to="/profile" className='links'>
            My profile
        </Link>
        <Link to="/logout" className='links'>
            Log out
        </Link>

             </>             
}

        </div>
        </div>
    </div>
    </div>
    );      
}

export default Header;
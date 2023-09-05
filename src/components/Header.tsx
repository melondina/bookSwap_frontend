import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';
import { getUser } from './UserAuth/userAuthOperation/userAuthOperation.ts';
import { setUser } from '../redux/slices/usersSlice.js';



const Header: React.FC = () => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.user.user);
    console.log("userHeader", user);

   useEffect(() => {
    async function fetchData() {
        try {
          const getMe = await getUser();
          console.log("getMe", getMe?.data);
    
          if (getMe?.status === 200) {
            dispatch(setUser(getMe.data));
          }
        } catch (error) {
          // Handle any errors here
          console.error("Error fetching data:", error);
        }
      } 
      fetchData()   

   }, [dispatch]);

   
return (
    <div className="header">
        <div className="container">
        <div className='header-top'>
        <Link to="/">
        <img width="100%" src={logo} alt="logo" />
            </Link>

        <div className='header-links'>
            <Link to="/login" className='links'>
                Login
            </Link>
            <Link to="/registration" className='links'>
                Sign Up
            </Link>
            <Link to="/library" className='links'>
                My library
            </Link>
            <Link to="/profile" className='links'>
                My profile
            </Link>
            <Link to="/logout" className='links'>
                Log out
            </Link>

        </div>
        </div>
    </div>
    </div>
    );      
}

export default Header;
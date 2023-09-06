import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser } from '../redux/slices/usersSlice';



const Logout: React.FC = () => {
    
    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            await axios.post(`/api/logout`, { withCredentials: true});
            dispatch(setUser(null))
        } catch (error) {
        }
    }


    return (
        <div className='container'>
            Login
            <div>
            <button type='button' onClick={handleLogout} className='button'>Yes</button>
            <Link to="/" className='button'>No</Link>
            </div>
        </div>
    )}

    export default Logout;
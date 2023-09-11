import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'; 
import { setUser } from '../redux/slices/usersSlice';

const Logout: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const handleLogout = async () => {
        try {
            await axios.post(`/api/logout`, { withCredentials: true });
            dispatch(setUser(null));

            navigate('/');
        } catch (error) {
        }
    }

    return (
        <div className='container container__logout'>
          <h2 className="content__title"> Are you sure you want to logout?</h2> 
            <div>
                <button type='button' onClick={handleLogout} className='button button__yesno'>Yes</button>
                <Link to="/" className='button button__yesno no'>No</Link></div>
        </div>
    )
}

export default Logout;

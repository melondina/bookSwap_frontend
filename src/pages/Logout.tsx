import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import { setUser } from '../redux/slices/usersSlice';

const Logout: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Получаем функцию navigate

    const handleLogout = async () => {
        try {
            await axios.post(`/api/logout`, { withCredentials: true });
            dispatch(setUser(null));

            // Выполняем перенаправление на главную страницу
            navigate('/');
        } catch (error) {
            // Обработка ошибок
        }
    }

    return (
        <div className='container'>
          <h2 className="content__title"> Are you sure you want to logout?</h2> 
            <div>
                <button type='button' onClick={handleLogout} className='button button__yesno'>Yes</button>
                <Link to="/" className='button button__yesno'>No</Link></div>
        </div>
    )
}

export default Logout;

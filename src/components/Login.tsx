import React from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {

    return (
        <div>
            <div className='container form-container'>
                <h2 className='form-container_title'>
                    Welcome to Book Share
                </h2>
                <form action="" className='form'>
                    <div className='form__wrap'>
                        <label  className='form__label' htmlFor="email">Email</label>
                        <input className='form__input' type="email" placeholder='Enter your email' />
                    </div>
                    <div className='form__wrap'>
                        <label className='form__label' htmlFor="password">Password</label>
                        <input className='form__input' type="password" placeholder='Enter password' />
                    </div>
                    <button className='button'>Continue</button>
                    <p className='form__bottom'>
                    Don`t have an account?
                    <Link className='form__links' to="/registration"> Sign Up</Link>
                </p>
                </form>
            </div>
        </div>

    )
    
}

export default Login;
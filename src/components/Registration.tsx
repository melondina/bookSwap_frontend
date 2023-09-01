import React from 'react';
import { Link } from 'react-router-dom';

const Registration: React.FC = () => {

    return (
        <div>
            <div className='container form-container'>
                <h2 className='form-container_title'>
                    Create your account
                </h2>
                <p>
                It’s free and easy 
                </p>
                <form action="" className='form'>
                    <div className='form__wrap'>
                        <label  className='form__label' htmlFor="email">Email</label>
                        <input className='form__input' type="email" placeholder='Enter your email' />
                    </div>
                    <div className='form__wrap'>
                        <label className='form__label' htmlFor="password">Password</label>
                        <input className='form__input' type="password" placeholder='Enter password' />
                        <span>Must be 8 characters at least</span>
                    </div>
                    <div className='form__wrap'>
                        <label className='form__label' htmlFor="password">Repeat password</label>
                        <input className='form__input' type="password" placeholder='Repeat password' />
                    </div>
                    <div className='form__wrap'>
                        <input className='form__checkbox' type="checkbox" name="By creating an account means you agree to the Terms and Conditions, and our Privacy Policy" id="checkbox-id" value="yes" required />
                        <label htmlFor="checkbox-label" for="checkbox-id">
                            By creating an account means you agree to the 
                            <Link className='form__links' to="/termsAndConditions"> Terms and Conditions</Link>
                        </label>
                    </div>
                    <button className='button'>Sign Up</button>
                    <p className='form__bottom'>
                    Already have an account?
                    <Link className='form__links' to="/login"> Login</Link>
                </p>
                </form>
            </div>
        </div>
    )
    
}

export default Registration;
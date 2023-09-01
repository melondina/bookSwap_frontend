import React from 'react';
import { Link } from 'react-router-dom';

const Registration: React.FC = () => {

    return (
        <div>
            <div className='container registration'>
                <h2 className='registration_title'>
                    Create your account
                </h2>
                <p>
                It’s free and easy 
                </p>
                <form action="" className='registration-form'>
                    <div className='registration-form__wrap'>
                        <label  className='registration-form__label' htmlFor="email">Email</label>
                        <input className='registration-form__input' type="email" placeholder='Enter your email' />
                    </div>
                    <div className='registration-form__wrap'>
                        <label className='registration-form__label' htmlFor="password">Password</label>
                        <input className='registration-form__input' type="password" placeholder='Enter password' />
                        <span>Must be 8 characters at least</span>
                    </div>
                    <div className='registration-form__wrap'>
                        <label className='registration-form__label' htmlFor="password">Repeat password</label>
                        <input className='registration-form__input' type="password" placeholder='Repeat password' />
                    </div>
                    <div className='registration-form__wrap'>
                        <input className='registration-form__checkbox' type="checkbox" name="By creating an account means you agree to the Terms and Conditions, and our Privacy Policy" id="checkbox-registration-id" value="yes" required />
                        <label htmlFor="checkbox-label" for="checkbox-registration-id">
                            By creating an account means you agree to the 
                            <Link to="/termsAndConditions"> Terms and Conditions</Link>
                        </label>
                    </div>
                    <button className='button'>Sign Up</button>
                </form>
            </div>
        </div>
    )
    
}

export default Registration;
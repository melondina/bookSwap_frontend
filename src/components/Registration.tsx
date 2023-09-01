import React from 'react';

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
                <form action="">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Enter your email' />
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter password' />
                    <span>Must be 8 characters at least</span>
                    <label htmlFor="password">Repeat password</label>
                    <input type="password" placeholder='Repeat password' />
                    <input type="checkbox" name="By creating an account means you agree to the Terms and Conditions, and our Privacy Policy" id="checkbox-registration-id" value="yes" required />
                </form>
            </div>
        </div>
    )
    
}

export default Registration;
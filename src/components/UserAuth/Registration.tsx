import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { initUserAuth } from './initUser.ts';
import { userRegistr } from './userAuthOperation/userAuthOperation.ts';
import eye from '../../assets/img/visibility_off.svg';


// const BASEURL = "http://localhost:8080"

const Registration: React.FC = () => {
    const [createNewUser, setCreateNewUser] = useState(initUserAuth);
    const [show, setShow] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);
    const navigate = useNavigate();

    const handleRegistrationForm = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCreateNewUser((prev) => ({
            ...prev, [name]: value
        }));
    }

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAcceptTerms(event.target.checked);
    }

    const handleRegistrationSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (acceptTerms) {
            try {
                await userRegistr(createNewUser);
                navigate("/login")
            } catch (error) {
            }
        } else {
            alert("Please accept Terms and Conditions.");
        }
    }

    return (
        <div className='container'>
            <h2 className='content__title'>
                Create your account
            </h2>
            <p>
                It’s free and easy
            </p>
            <form onSubmit={handleRegistrationSubmit} className='form'>
                <div className='form__wrap'>
                    <label className='form__label' htmlFor="email">Email</label>
                    <input autoComplete='on' className='form__input' type="email" name="email" onChange={handleRegistrationForm} value={createNewUser.email} placeholder='Enter your email' />
                </div>
                <div className='form__wrap form__wrap__eye'>
                    <label className='form__label' htmlFor="password">Password</label>
                    <input autoComplete='on' className='form__input' type={show ? "text" : "password"} name="password" onChange={handleRegistrationForm} value={createNewUser.password} placeholder='Enter password' />
                    <span>Must be 8 characters at least</span>
                    <button className="button__eye" type="button" onClick={() => setShow((prev) => !prev)}><img width="24px"  src={eye} alt="eye" /></button>

                </div>
                <div className='form__wrap form__wrap__eye'>
                    <label className='form__label' htmlFor="password">Repeat password</label>
                    <input className='form__input' type={show?"text":"password"} placeholder='Repeat password' />
                    <button className="button__eye" type="button" onClick={() => setShow((prev) => !prev)}><img width="24px"  src={eye} alt="eye" /> </button>
                </div>
                <div className='form__wrap'>
                <input
                    className='form__checkbox'
                    type="checkbox"
                    name="acceptTerms"
                    id="checkbox-id"
                    checked={acceptTerms}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="checkbox-id">  
                    By creating an account means you agree to the
                    <Link className='form__links' to="/termsAndConditions"> Terms and Conditions</Link>
                </label>
            </div>
                <button type="submit" className='button'>Sign Up</button>
                <p className='form__bottom'>
                    Already have an account?
                    <Link className='form__links' to="/login"> Login</Link>
                </p>
            </form>
        </div>
    )
}

export default Registration;

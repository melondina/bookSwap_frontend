import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


import { initUserAuth } from './initUser.ts';
import { getUser, userLogin } from './userAuthOperation/userAuthOperation.ts';
import eye from '../../assets/img/visibility_off.svg';
import { setUser } from '../../redux/slices/usersSlice.js';
import ErrorComponent from "../ErrorComponent.tsx";



const Login: React.FC = () => {
    const [loginUser, setLoginUser] = useState(initUserAuth);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const [errorApi, setErrorApi] = useState(null);
    const [httpStatus, setHttpStatus] = useState(null);
    

    const handleLoginForm = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setLoginUser((prev) => ({
            ...prev, [name]:value
        }))
    }



    const handleLoginSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const userData = await userLogin(loginUser);
            const { status, data } = userData;
            if(status===200) {
                const getMe = await getUser();
                console.log("getMe",getMe?.data);

                if(getMe?.status===200) {
                    dispatch(setUser(getMe.data));
                    const email = getMe.data.email;
                    console.log("email", email)
                navigate("/")
            }
                
            } else {
                setHttpStatus(status);
                setErrorApi(data);
                console.error("userLogin error",data)
                          
            }
        } catch (error) {
            console.error("userLogin error catch",error)
                setHttpStatus(error.status);
                setErrorApi(error);
        } 
    }


    return (
        <div className='container'>
                <h2 className='content__title'>
                    Welcome to Book Share
                    {errorApi && (
          <ErrorComponent error={errorApi} httpStatus={httpStatus} />
        )}
                </h2>

                <form onSubmit={handleLoginSubmit} className='form'>
                    <div className='form__wrap'>
                        <label  className='form__label' htmlFor="email">Email</label>
                        <input className='form__input' type="email" name="email" onChange={handleLoginForm} value={loginUser.email} placeholder='Enter your email' />
                    </div>
                    <div className='form__wrap form__wrap__eye'>
                        <label className='form__label' htmlFor="password">Password</label>
                        <input className='form__input form__input__eye' type={show?"text":"password"} name="password" onChange={handleLoginForm} value={loginUser.password} placeholder='Enter password' />
                        <button className="button__eye" type="button" onClick={() => setShow((prev) => !prev)}><img width="24px"  src={eye} alt="eye" /></button>
                    </div>
                    <button type="submit" className='button'>Log In</button>
                    <p className='form__bottom'>
                    Don`t have an account?
                    <button className='form__links button' onClick={() => navigate("/registration")}> Sign Up</button>
                </p>
                </form>
        </div>

    )
    
}

export default Login;
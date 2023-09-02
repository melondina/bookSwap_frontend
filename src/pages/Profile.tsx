import React from 'react';
import { Link } from 'react-router-dom';

const Profile: React.FC = () => {
    return (
        <div>
            <div className='container form-container'>
                <h2 className='form-container_title'>
                    Personal Info
                </h2>
                <form action="" className='form'>
                <div className='form__wrap'>
                        <label  className='form__label' htmlFor="name">FIRST NAME</label>
                        <input className='form__input' type="text" placeholder='Enter your first name' />
                    </div>
                    <div className='form__wrap'>
                        <label  className='form__label' htmlFor="surname">LAST NAME</label>
                        <input className='form__input' type="text" placeholder='Enter your last name' />
                    </div>

                    <div className='form__wrap'>
                        <label  className='form__label' htmlFor="email">EMAIL</label>
                        <input className='form__input input__disabled' type="email" disabled/>
                    </div>
                    <div className='form__wrap'>
                        <label className='form__label' htmlFor="postcode">POSTCODE</label>
                        <input className='form__input' type="number" placeholder='Enter your postcode' />
                    </div>
                    <div className='form__wrap'>
                        <label className='form__label' htmlFor="country">COUNTRY</label>
                        <input className='form__input input__disabled' type="text" disabled />
                    </div>
                    <div className='form__wrap'>
                        <label className='form__label' htmlFor="city">CITY</label>
                        <input className='form__input input__disabled' type="text" disabled />
                    </div>
                    <div >
                        <button type='submit' className='button button-profile'>Save</button>
                        <button type='reset' className='button button-profile button-profile__right'>Cancel</button>
                    </div>
                </form>
            </div>
        </div>

    )}

    export default Profile;
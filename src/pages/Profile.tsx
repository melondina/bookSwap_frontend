import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Profile: React.FC = () => {

    const [updateUser, setUpdateUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        postalCode: '',
        country: '',
        city: '',
    });

    interface IUserProfile {
        firstName: string,
        lastName: string,
        email: string,
        postalCode: string,
        country: string,
        city: string,
    }

    const handleUpdateUserForm = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setUpdateUser((prev) => ({
            ...prev, [name]:value
        }))
    }

    const navigate = useNavigate();

    const userProfileCreating = async (updateUser: IUserProfile) => {
        try {
            const {data} = await axios.put(`/api/users/{user-id}`, updateUser);
            console.log("userProfileCreating", data)
        } catch (error) {
            console.log("userProfileCreating", error)
        }
    }

    const handleUpdateUserSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const userUpdateData = await userProfileCreating(updateUser);
            if(userUpdateData?.status===201) {
                navigate("/library")
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className='container'>
            <h2 className='content__title'>
                Personal Info
            </h2>

            <div className='form-container'>
                <form onSubmit={handleUpdateUserSubmit} className='form'>
                <div className='form__wrap'>
                        <label  className='form__label' htmlFor="name">FIRST NAME</label>
                        <input className='form__input' type="text" name="firstName" onChange={handleUpdateUserForm} value={updateUser.firstName} placeholder='Enter your first name' />
                    </div>
                    <div className='form__wrap'>
                        <label  className='form__label' htmlFor="surname">LAST NAME</label>
                        <input className='form__input' type="text" name="lastName" onChange={handleUpdateUserForm} value={updateUser.lastName} placeholder='Enter your last name' />
                    </div>

                    <div className='form__wrap'>
                        <label  className='form__label' htmlFor="email">EMAIL</label>
                        <input className='form__input input__disabled' type="email" disabled/>
                    </div>
                    <div className='form__wrap'>
                        <label className='form__label' htmlFor="postcode">POSTCODE</label>
                        <input className='form__input' type="number" name="postalCode" onChange={handleUpdateUserForm} value={updateUser.postalCode} placeholder='Enter your postcode' />
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
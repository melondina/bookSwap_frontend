import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ErrorComponent from "../components/ErrorComponent.tsx";

const useUserSelector = () => {
  return useSelector((state) => state.user.user);
};

const Profile: React.FC = () => {
  const [errorApi, setErrorApi] = useState(null);
  const [httpStatus, setHttpStatus] = useState(null);

  interface IUserProfile {
    firstName: string;
    lastName: string;
    postalCode: string;
  }

  const [postCode, setPostCode] = useState("");

  const [city, setCity] = useState("");

  const [updateUser, setUpdateUser] = useState({
    firstName: "",
    lastName: "",
    postalCode: "",
  });

  const navigate = useNavigate();
  const user = useUserSelector();

  const handleUpdateUserForm = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUpdateUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePostCode = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPostCode(value);
  };

  const getHome = () => {
    navigate(`/`);
  };

  const userProfileCreating = async (updateUser: IUserProfile) => {
    try {
      const data = await axios.put(`/api/users/${user.id}`, updateUser, {
        withCredentials: true,
      });
      console.log("userProfileCreating", data);
      return data;
    } catch (error) {
      console.log("bookCreating", error);
      setHttpStatus(error.response.status);
      setErrorApi(error.response);
      return { status: error.response.status, data: error.response.data };
    }
  };

  const handleUpdateUserSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const newUserUpdate = { ...updateUser, postalCode: postCode };

      const userUpdateData = await userProfileCreating(newUserUpdate);
      const { status, data } = userUpdateData;
      if (userUpdateData?.status === 200) {
        console.log("userUpdateData", userUpdateData);
        navigate("/library");
      } else {
        setHttpStatus(status);
        setErrorApi(data);
      }
    } catch (error) {
      console.log("profile error", error);
      setHttpStatus(error.response.status);
      setErrorApi(error.response);
      return { status: error.response.status, data: error.response.data };
    }
  };

  // console.log(user)

  useEffect(() => {
    if (postCode.length === 5) {
      try {
        const getCity = async () => {
          const { data } = await axios.get(`/api/location/${postCode}`);
          setCity(data.city);
        };
        getCity();
      } catch (error) {
        setErrorApi("City with postal code not found");
      }
    }
  }, [postCode]);

  return (
    <div className="container">
      <h2 className="content__title">Personal Info</h2>
      {errorApi && <ErrorComponent error={errorApi} httpStatus={httpStatus} />}
      <div className="form-container">
        <form onSubmit={handleUpdateUserSubmit} className="form">
          <div className="form__wrap">
            <label className="form__label" htmlFor="name">
              FIRST NAME
            </label>
            <input
              className="form__input"
              type="text"
              name="firstName"
              onChange={handleUpdateUserForm}
              value={updateUser.firstName}
              placeholder="Enter your first name"
            />
          </div>
          <div className="form__wrap">
            <label className="form__label" htmlFor="surname">
              LAST NAME
            </label>
            <input
              className="form__input"
              type="text"
              name="lastName"
              onChange={handleUpdateUserForm}
              value={updateUser.lastName}
              placeholder="Enter your last name"
            />
          </div>

          <div className="form__wrap">
            <label className="form__label" htmlFor="email">
              EMAIL
            </label>
            <input
              className="form__input input__disabled"
              type="email"
              name="email"
              value={user?.email}
              disabled
            />
          </div>
          <div className="form__wrap">
            <label className="form__label" htmlFor="postcode">
              POSTCODE
            </label>
            <input
              className="form__input"
              type="number"
              name="postalCode"
              onChange={handlePostCode}
              value={postCode}
              placeholder="Enter your postcode"
            />
          </div>
          <div className="form__wrap">
            <label className="form__label" htmlFor="country">
              COUNTRY
            </label>
            <input
              className="form__input input__disabled"
              type="text"
              disabled
              value="Germany"
            />
          </div>
          <div className="form__wrap">
            <label className="form__label" htmlFor="city">
              CITY
            </label>
            <input
              className="form__input input__disabled"
              type="text"
              name="city"
              value={city}
            />
          </div>
          <div>
            <button type="submit" className="button button-profile">
              Save
            </button>
            <button
              type="reset"
              className="button button-profile button-profile__right"
              onClick={() => getHome()}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;

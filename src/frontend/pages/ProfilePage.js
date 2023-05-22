import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [profileInfo, setProfile] = useState("");
  const { currentUser, removeUserCredentials } = useAuth();

  const navigate = useNavigate();

  const logOutClickHandler = () => {
    removeUserCredentials();
    navigate("/");
  };

  const profile = () => {
    return (
      <div className="profileDetails_container">
        <p className="profileDetails_heading">Profile Details</p>
        <p>
          Name: {currentUser?.firstName} {currentUser?.lastName}
        </p>
        <p>Email: {currentUser?.email}</p>
        <button onClick={logOutClickHandler} className="btn logOutBtn">
          Log out
        </button>
      </div>
    );
  };

  const profileClickHandler = () => {};
  const addressClickHandler = () => {};

  return (
    <article className="profilePage_container flex-center">
      <h3 className="accountInformation">Account Information</h3>
      <section className="profile_container flex-center">
        <div className="accountInfo_togglebtn-conatiner">
          <NavLink className="userProfileNavLink">
            <button className="userprofilebtn" onClick={profileClickHandler}>
              Profile
            </button>
          </NavLink>
          <NavLink className="userAddressNavLink">
            <button className="userAddressbtn" onClick={addressClickHandler}>
              Address
            </button>
          </NavLink>
        </div>
        <div className="addressDetails_container">
          <p className="addressDetails_heading">Address Details</p>
        </div>
      </section>
    </article>
  );
};

export default ProfilePage;

import React, { useState } from "react";
import UserProfile from "../components/profile/UserProfile";
import UserAddress from "../components/profile/UserAddress";
import { NavLink } from "react-router-dom";

const ProfilePage = () => {
  const [profileInfo, setProfile] = useState("profileDetails");

  const profileHandler = (type) => {
    if (type === "profileDetails") {
      setProfile(type);
    }

    if (type === "addressDetails") {
      setProfile(type);
    }
  };

  return (
    <article className="userInfo_container flex-center">
      <h3 className="userInfo_container-title">Account Information</h3>
      <section className="userInfo_wrapper flex-center">
        <div className="userInfo_wrapper-btn-container">
          <NavLink to="userInfo" className="userProfileNavLink">
            <span
              className="userProfilebtn"
              onClick={() => profileHandler("profileDetails")}
            >
              Profile
            </span>
          </NavLink>
          <NavLink to="userAddress" className="userAddressNavLink">
            <span
              className="userAddressbtn"
              onClick={() => profileHandler("addressDetails")}
            >
              Address
            </span>
          </NavLink>
        </div>

        <>{profileInfo === "profileDetails" && <UserProfile />}</>

        <>{profileInfo === "addressDetails" && <UserAddress />}</>
      </section>
    </article>
  );
};

export default ProfilePage;

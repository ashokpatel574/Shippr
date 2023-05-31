import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { currentUser, removeUserCredentials } = useAuth();

  const navigate = useNavigate();

  const logOutHandler = () => {
    removeUserCredentials();
    navigate("/");
  };
  return (
    <div className="userProfile_container flex-start flex-column">
      <h3 className="userProfile_container-heading">Profile Details</h3>
      <p className="userProfile-name">
        <span>Name:</span> {currentUser?.firstName} {currentUser?.lastName}
      </p>
      <p className="userProfile-email">
        <span>Email:</span> {currentUser?.email}
      </p>
      <button onClick={logOutHandler} className="btn logOutBtn">
        Log out
      </button>
    </div>
  );
};

export default UserProfile;

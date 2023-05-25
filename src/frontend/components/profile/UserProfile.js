import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { currentUser, removeUserCredentials } = useAuth();

  const navigate = useNavigate();

  const logOutClickHandler = () => {
    removeUserCredentials();
    navigate("/");
  };
  return (
    <div className="userProfile_container">
      <h3 className="userProfile_container-heading">Profile Details</h3>
      <p className="userProfile-name">
        Name: {currentUser?.firstName} {currentUser?.lastName}
      </p>
      <p className="userProfile-email">Email: {currentUser?.email}</p>
      <button onClick={logOutClickHandler} className="btn logOutBtn">
        Log out
      </button>
    </div>
  );
};

export default UserProfile;

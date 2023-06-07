import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { removeUserCredentials } from "../../utils/authService";
import { useData } from "../../context/DataContext";

const UserProfile = () => {
  const { currentUser, setToken, setCurrentUser, setLoginCredentialError } =
    useAuth();
  const { setIsLoading } = useData();
  const navigate = useNavigate();

  const logOutHandler = () => {
    removeUserCredentials(
      setToken,
      setCurrentUser,
      setIsLoading,
      setLoginCredentialError
    );
    navigate("/");
  };

  return (
    <div className="userProfile_container flex-start flex-column gap-s padding-tp-btm-m">
      <h3 className="userProfile_container-heading">Profile Details</h3>
      <p className="userProfile-name">
        <span>Name:</span> {currentUser?.name}
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

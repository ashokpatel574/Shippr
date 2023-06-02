import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { validateEmail } from "../utils/utils";

const LoginPage = () => {
  const [loginInputDetails, setLoginInputDetails] = useState({
    email: "",
    password: "",
  });
  const [loginErrorMessage, setLoginErrorMessage] = useState({
    email: "",
    password: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const {
    token,
    loginCredentialError,
    setLoginCredentialError,
    getUserCredentials,
  } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const guestUserLogInHandler = () => {
    const guestUserDetails = {
      email: "test@test.com",
      password: "Test123",
    };
    setLoginInputDetails(guestUserDetails);
    getUserCredentials(guestUserDetails.email, guestUserDetails.password);
  };

  const loginInputDetailsHandler = (e) => {
    const { name, value } = e.target;
    setLoginInputDetails({ ...loginInputDetails, [name]: value });
  };

  const passwordViewHandler = (e) => {
    if (e.type === "mouseout" || e.type === "touchend") {
      setIsPasswordVisible(false);
    }

    if (e.type === "mouseover" || e.type === "touchstart") {
      setIsPasswordVisible(true);
    }
  };

  const userLoginHandler = () => {
    let flag = false;
    let newLoginErrorDetails = {};

    Object.keys(loginErrorMessage).forEach((key) => {
      newLoginErrorDetails[key] = "";
      if (loginInputDetails[key] === "") {
        newLoginErrorDetails[key] = `${
          key[0].toUpperCase() + key.slice(1)
        } is required!`;
        flag = true;
      }
    });

    if (
      loginInputDetails.email.length > 0 &&
      !validateEmail(loginInputDetails.email)
    ) {
      flag = true;
      newLoginErrorDetails = {
        ...newLoginErrorDetails,
        email: "Email is Invalid!",
      };
    }

    if (!flag) {
      setLoginErrorMessage({ email: "", password: "" });
    }

    flag
      ? setLoginErrorMessage(newLoginErrorDetails)
      : getUserCredentials(loginInputDetails.email, loginInputDetails.password);
  };

  useEffect(() => {
    setLoginCredentialError(null);
    if (token) {
      navigate(location.state?.from?.pathname || "/");
    }
  }, [token]);

  return (
    <article className="loginpage_container flex-center">
      <section className="login_container flex-center">
        {loginCredentialError && (
          <p className="loginApiError">{loginCredentialError?.data}</p>
        )}

        <h3>Log In</h3>
        <div className="login_email-container">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            className="loginEmail"
            name="email"
            placeholder="Enter email here"
            value={loginInputDetails.email}
            onChange={(e) => loginInputDetailsHandler(e)}
          />
          <span className="name-error">{loginErrorMessage.email}</span>
        </div>
        <div className="login_password-container">
          <label htmlFor="password">Password</label>
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            className="loginPassword"
            placeholder="Enter password here"
            name="password"
            value={loginInputDetails.password}
            onChange={(e) => loginInputDetailsHandler(e)}
          />

          {loginInputDetails.password && (
            <span className="password-icon">
              {isPasswordVisible ? (
                <VisibilityIcon
                  className="password-visible-icon"
                  onMouseOver={(e) => passwordViewHandler(e)}
                  onMouseOut={(e) => passwordViewHandler(e)}
                  onTouchStart={(e) => passwordViewHandler(e)}
                  onTouchEnd={(e) => passwordViewHandler(e)}
                />
              ) : (
                <VisibilityOffIcon
                  className="password-hidden-icon"
                  onMouseOver={(e) => passwordViewHandler(e)}
                  onMouseOut={(e) => passwordViewHandler(e)}
                  onTouchStart={(e) => passwordViewHandler(e)}
                  onTouchEnd={(e) => passwordViewHandler(e)}
                />
              )}
            </span>
          )}

          <span className="email-error">{loginErrorMessage.password}</span>
        </div>
        <button onClick={userLoginHandler} className="btn loginUserBtn">
          Login
        </button>
        <button className="btn loginGuestBtn" onClick={guestUserLogInHandler}>
          Login as Guest
        </button>
        <p className="loginPage-switchtext">
          Don't have an account ?{" "}
          <span>
            <Link to="/signUp">Sign Up</Link>
          </span>
        </p>
      </section>
    </article>
  );
};

export default LoginPage;

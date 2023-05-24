import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const [loginInputDetails, setLoginInputDetails] = useState({
    email: "",
    password: "",
  });
  const [loginErrorMessage, setLoginErrorMessage] = useState({
    email: "",
    password: "",
  });

  const {
    token,
    loginCredentialError,
    loginCredentialLoader,
    getUserCredentials,
  } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const guestUserClickHandler = () => {
    const guestUserDetails = {
      email: "ashokpatel574@gmail.com",
      password: "ashokpatel",
    };
    getUserCredentials(guestUserDetails.email, guestUserDetails.password);
  };

  const userLoginClickHandler = () => {
    let flag = false;
    const newLoginErrorDetails = {};
    Object.keys(loginErrorMessage).forEach((key) => {
      newLoginErrorDetails[key] = "";
      if (loginInputDetails[key] === "") {
        newLoginErrorDetails[key] = `${
          key[0].toUpperCase() + key.slice(1)
        } is required!`;
        flag = true;
      }
    });

    if (!flag) {
      setLoginErrorMessage({ email: "", password: "" });
    }

    const { email, password } = loginInputDetails;
    flag
      ? setLoginErrorMessage(newLoginErrorDetails)
      : getUserCredentials(email, password);
  };

  useEffect(() => {
    if (token) {
      navigate(location.state.from.pathname || "/");
    }
  }, [token]);

  return (
    <article className="loginpage_container flex-center">
      {loginCredentialLoader && (
        <section className="login_container flex-center">Loading</section>
      )}

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
            onChange={(e) =>
              setLoginInputDetails({
                ...loginInputDetails,
                email: e.target.value,
              })
            }
          />
          <span className="name-error">{loginErrorMessage.email}</span>
        </div>
        <div className="login_password-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="loginPassword"
            placeholder="Enter password here"
            name="password"
            value={loginInputDetails.password}
            onChange={(e) =>
              setLoginInputDetails({
                ...loginInputDetails,
                password: e.target.value,
              })
            }
          />
          <span className="email-error">{loginErrorMessage.password}</span>
        </div>

        <button onClick={userLoginClickHandler} className="btn loginUserBtn">
          Login
        </button>
        <button className="btn loginGuestBtn" onClick={guestUserClickHandler}>
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

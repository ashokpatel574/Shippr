import React, { useState, useEffect } from "react";
import {
  validateOnlyString,
  validateEmail,
  validatePassword,
} from "../utils/utils";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const SignUpPage = () => {
  const [signUpDetails, setSignUpDetails] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [signUpFormErrorDetails, setSignUpFormErrorDetails] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const { setUserCredentials, token } = useAuth();

  const signUpDetailsChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignUpDetails((prevState) => ({ ...prevState, [name]: value }));

    if (name === `name`) {
      const nameLength = value.length;
      setSignUpFormErrorDetails({ ...signUpFormErrorDetails, [name]: `` });

      if (!validateOnlyString(value)) {
        setSignUpFormErrorDetails({
          ...signUpFormErrorDetails,
          [name]: `Name should be in text!`,
        });
      }

      if (nameLength < 4) {
        setSignUpFormErrorDetails({
          ...signUpFormErrorDetails,
          [name]: `Name should have more than 3 character!`,
        });
      }
    }

    if (name === "email") {
      setSignUpFormErrorDetails({ ...signUpFormErrorDetails, [name]: `` });
      if (!validateEmail(value)) {
        setSignUpFormErrorDetails({
          ...signUpFormErrorDetails,
          [name]: `Email is invalid!`,
        });
      }
    }

    if (name === "password") {
      setSignUpFormErrorDetails({ ...signUpFormErrorDetails, [name]: `` });
      if (!validatePassword(value)) {
        setSignUpFormErrorDetails({
          ...signUpFormErrorDetails,
          [name]: `'Password should be in 8 to 15 chars and should have one digit'`,
        });
      }
    }
  };

  const userSignUpClickHandler = () => {
    const { name, email, password, passwordConfirm } = signUpDetails;

    let flag = false;
    let newErrorForm = {};
    Object.keys(signUpFormErrorDetails).forEach((key) => {
      newErrorForm[key] = "";
      if (signUpDetails[key] === "") {
        newErrorForm[key] =
          key !== `passwordConfirm`
            ? `${key[0].toUpperCase() + key.slice(1)} is required!`
            : `Password is required!`;
        flag = true;
      }
    });

    if (password !== passwordConfirm) {
      newErrorForm["passwordConfirm"] =
        "Password and confirm password didn't matched";
      flag = true;
    } else {
      setSignUpFormErrorDetails({
        ...setSignUpFormErrorDetails,
        passwordConfirm: "",
      });
    }

    flag
      ? setSignUpFormErrorDetails(newErrorForm)
      : setUserCredentials(name, email, password);
  };

  useEffect(() => {
    if (token) {
      navigate(location?.state?.from.pathname || "/", { replace: true });
    }
  }, [token]);

  return (
    <article className="signUpPage_container flex-center">
      <section className="signUp_container flex-center">
        <h3>Sign Up</h3>

        <div className="signUp_name-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="signUpEmail"
            name="name"
            placeholder="Enter name here"
            value={signUpDetails.name}
            onChange={signUpDetailsChangeHandler}
          />
          <span className="name-error">{signUpFormErrorDetails.name}</span>
        </div>
        <div className="signUp_email-container">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            className="signUpEmail"
            name="email"
            placeholder="Enter email here"
            value={signUpDetails.email}
            onChange={signUpDetailsChangeHandler}
          />
          <span className="email-error">{signUpFormErrorDetails.email}</span>
        </div>
        <div className="signUp_password-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="loginPassword"
            placeholder="Enter password here"
            name="password"
            value={signUpDetails.password}
            onChange={signUpDetailsChangeHandler}
          />
          <span className="password-error">
            {signUpFormErrorDetails.password}
          </span>
        </div>
        <div className="signUp_passwordConfirm-container">
          <label htmlFor="passwordconfirm">Confirm Password</label>
          <input
            type="password"
            id="passwordconfirm"
            className="loginPasswordconfirm"
            placeholder="Confirm password"
            name="passwordConfirm"
            value={signUpDetails.passwordConfirm}
            onChange={signUpDetailsChangeHandler}
          />
          <span className="passwordConfirm-error">
            {signUpFormErrorDetails.passwordConfirm}
          </span>
        </div>
        <button onClick={userSignUpClickHandler} className="btn signUpUserBtn">
          Create an account
        </button>

        <p className="signUpPage-switchtext">
          Already have an account ?
          <span>
            <Link to="/login">Log In</Link>
          </span>
        </p>
      </section>
    </article>
  );
};

export default SignUpPage;

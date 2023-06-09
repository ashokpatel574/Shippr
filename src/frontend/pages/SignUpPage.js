import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useData } from "../context/DataContext";
import { setUserCredentials } from "../utils/authService";
import {
  validateOnlyString,
  validateEmail,
  validatePassword,
} from "../utils/utils";

const SignUpPage = () => {
  const [signUpFormErrorDetails, setSignUpFormErrorDetails] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const {
    token,
    setToken,
    setCurrentUser,
    setSignUpCredentialError,
    signUpDetails,
    setSignUpDetails,
  } = useAuth();
  const { setIsLoading } = useData();

  const signUpDetailsHandler = (e) => {
    const { name, value } = e.target;
    setSignUpDetails((prevState) => ({ ...prevState, [name]: value.trim() }));

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
          [name]: `Password should be min 8 chars, should include atleast one small, captial letter & digit`,
        });
      }
    }

    if (name === "passwordConfirm") {
      if (value.length > 0) {
        setSignUpFormErrorDetails({ ...signUpFormErrorDetails, [name]: `` });
      }
    }
  };

  const userSignUpHandler = () => {
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
      newErrorForm["passwordConfirm"] = "Password does not match";
      flag = true;
    } else {
      setSignUpFormErrorDetails({
        ...setSignUpFormErrorDetails,
        passwordConfirm: "",
      });
    }

    flag
      ? setSignUpFormErrorDetails(newErrorForm)
      : setUserCredentials(
          name,
          email,
          password,
          setToken,
          setCurrentUser,
          setIsLoading,
          setSignUpCredentialError,
          setSignUpDetails
        );

    // setSignUpDetails({
    //   name: "",
    //   email: "",
    //   password: "",
    //   passwordConfirm: "",
    // });
  };

  useEffect(() => {
    if (token) {
      navigate(location?.state?.from.pathname || "/", { replace: true });
    }
  }, [token]);

  return (
    <section className="signUpPage_container flex-column padding-xxl">
      <article className="signUp_container flex- flex-column flex-center gap-l">
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
            onChange={signUpDetailsHandler}
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
            onChange={signUpDetailsHandler}
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
            onChange={signUpDetailsHandler}
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
            onChange={signUpDetailsHandler}
          />
          <span className="passwordConfirm-error">
            {signUpFormErrorDetails.passwordConfirm}
          </span>
        </div>
        <button onClick={userSignUpHandler} className="btn signUpUserBtn">
          Create an account
        </button>

        <p className="signUpPage-switchtext">
          Already have an account ?
          <span>
            <Link to="/login">Log In</Link>
          </span>
        </p>
      </article>
    </section>
  );
};

export default SignUpPage;

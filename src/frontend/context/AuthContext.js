import React, { useState, createContext, useContext } from "react";

import { LoginService, SignUpService } from "../utils/apiUtils";
import { ToastHandler } from "../utils/utils";
import { ToastType } from "../constant";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const localStorageToken = JSON.parse(
    localStorage.getItem("loginCredentials")
  );
  const [token, setToken] = useState(localStorageToken?.token);
  const [currentUser, setCurrentUser] = useState(localStorageToken?.user);

  const [loginCredentialError, setLoginCredentialError] = useState(null);
  const [signUpCredentialError, setSignUpCredentialError] = useState(null);
  const [loginCredentialLoader, setLoginCredentialLoader] = useState(true);

  // loginpage setup
  const getUserCredentials = async (email, password) => {
    try {
      setLoginCredentialError(null);
      setLoginCredentialLoader(true);
      const {
        data: { foundUser, encodedToken },
        status,
      } = await LoginService({ email, password });

      if (status === 200 || status === 201) {
        localStorage.setItem(
          `loginCredentials`,
          JSON.stringify({ token: encodedToken, user: foundUser })
        );
        setLoginCredentialLoader(false);
        setCurrentUser(foundUser);
        setToken(encodedToken);

        setLoginCredentialError(null);
        ToastHandler(ToastType.Success, "Successfully logged in");
      }
    } catch (error) {
      const {
        response: { status, statusText },
      } = error;

      setLoginCredentialLoader(false);
      if (status === 404) {
        setLoginCredentialError({
          data: `User Email Id Not Found`,
          status: status,
          statusText: statusText,
        });
      } else if (status === 401) {
        setLoginCredentialError({
          data: `Email or Password is incorrect`,
          status: status,
          statusText: statusText,
        });
      } else {
        setLoginCredentialError({
          data: `Something Went Wrong, Try again later`,
          status: status,
          statusText: statusText,
        });
      }
    }
  };

  // Sign up Setup
  const setUserCredentials = async (name, email, password) => {
    try {
      setSignUpCredentialError(null);
      const {
        data: { createdUser, encodedToken },
        status,
      } = await SignUpService({ email, password, name });

      if (status === 200 || status === 201) {
        localStorage.setItem(
          `loginCredentials`,
          JSON.stringify({ token: encodedToken, user: createdUser })
        );
        setCurrentUser(createdUser);
        setToken(encodedToken);
        ToastHandler(ToastType.Success, "Successfully logged in");
        setSignUpCredentialError(null);
      }
    } catch (error) {
      setSignUpCredentialError(error);
      ToastHandler(
        ToastType.Error,
        error?.response?.data?.errors?.at(0) || "Something went wrong !"
      );
    }
  };

  //log out page setup
  const removeUserCredentials = () => {
    localStorage.removeItem("loginCredentials");
    setLoginCredentialError(null);
    setLoginCredentialLoader(true);
    setToken(null);
    setCurrentUser(null);
    ToastHandler(ToastType.Success, "Successfully logged out");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        currentUser,
        loginCredentialLoader,
        loginCredentialError,
        getUserCredentials,
        setUserCredentials,
        setLoginCredentialError,
        setLoginCredentialLoader,
        removeUserCredentials,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

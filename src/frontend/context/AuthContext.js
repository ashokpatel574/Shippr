import React, { useState, createContext, useContext } from "react";
import { SignUpService, LoginService } from "../utils/apiService";
import { ToastType } from "../constant";
import { ToastHandler } from "../utils/utils";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const localStorageToken = JSON.parse(
    localStorage.getItem("loginCredentials")
  );

  const [token, setToken] = useState(localStorageToken?.token);
  const [currentUser, setCurrentUser] = useState(localStorageToken?.user);
  const [loginCredentialError, setLoginCredentialError] = useState(null);

  // loginpage setup
  const getUserCredentials = async (email, password) => {
    try {
      setLoginCredentialError(null);
      const {
        data: { foundUser, encodedToken },
        status,
      } = await LoginService({ email, password });

      if (status === 200 || status === 201) {
        localStorage.setItem(
          "loginCredentials",
          JSON.stringify({ token: encodedToken, user: foundUser })
        );
        setCurrentUser(foundUser);
        setToken(encodedToken);
        setLoginCredentialError(null);
        ToastHandler(ToastType.Success, "Successfully logged in");
      }
    } catch (error) {
      const {
        response: { status, statusText },
      } = error;

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
      const {
        data: { createdUser, encodedToken },
        status,
      } = await SignUpService({ email, password, name });

      if (status === 200 || status === 201) {
        localStorage.setItem(
          "loginCredentials",
          JSON.stringify({ token: encodedToken, user: createdUser })
        );
        setCurrentUser(createdUser);
        setToken(encodedToken);
        ToastHandler(ToastType.Success, "Successfully logged in");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // log out page setup

  const removeUserCredentials = async () => {
    localStorage.removeItem("loginCredentials");
    setToken(null);
    setCurrentUser(null);
    ToastHandler(ToastType.Success, "Successfully logged out");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        currentUser,
        loginCredentialError,
        getUserCredentials,
        setUserCredentials,
        removeUserCredentials,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
import React, { useState, createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const localStorageToken = JSON.parse(
    localStorage.getItem("loginCredentials")
  );
  const [token, setToken] = useState(localStorageToken?.token);
  const [currentUser, setCurrentUser] = useState(localStorageToken?.user);
  const [loginCredentialError, setLoginCredentialError] = useState(null);
  const [signUpCredentialError, setSignUpCredentialError] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        token,
        currentUser,
        setToken,
        setCurrentUser,
        loginCredentialError,
        signUpCredentialError,
        setLoginCredentialError,
        setSignUpCredentialError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

import React, { useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const localStorageToken = JSON.parse(
    localStorage.getItem("loginCredentials")
  );
  const [token, setToken] = useState(localStorageToken?.token);
  const [currentUser, setCurrentUser] = useState(localStorageToken?.user);
  const [loginCredentialError, setLoginCredentialError] = useState(null);
  const [signUpCredentialError, setSignUpCredentialError] = useState(null);
  const [signUpDetails, setSignUpDetails] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  // Since our mock backend wipes any cart and wishlist data stored in a session,
  // it is essential to update the same in the localStorage and in the current dataContext
  // to maintain the sync between dataContext and actual user data.
  // For this, useEffect is used just once on every hard refresh.

  useEffect(() => {
    setCurrentUser((prev) => ({
      ...prev,
      cart: [],
      wishlist: [],
      orderlist: [],
    }));

    if (currentUser) {
      localStorage.setItem(
        "loginCredentials",
        JSON.stringify({
          ...currentUser,
          cart: [],
          wishlist: [],
          orderlist: [],
        })
      );
    }
  }, []);

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
        signUpDetails,
        setSignUpDetails,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

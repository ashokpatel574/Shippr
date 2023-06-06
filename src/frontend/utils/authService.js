import { LoginService } from "./apiUtils";
import { SignUpService } from "./apiUtils";
import { ToastHandler } from "./utils";
import { ToastType } from "../constant";

// loginpage setup
export const getUserCredentials = async (
  email,
  password,
  setToken,
  setCurrentUser,
  setIsLoading,
  setLoginCredentialError
) => {
  try {
    setLoginCredentialError(null);
    setIsLoading(true);
    const {
      data: { foundUser, encodedToken },
      status,
    } = await LoginService({ email, password });

    if (status === 200 || status === 201) {
      localStorage.setItem(
        `loginCredentials`,
        JSON.stringify({ token: encodedToken, user: foundUser })
      );

      setLoginCredentialError(null);
      ToastHandler(ToastType.Success, "Successfully logged in");
      setCurrentUser(foundUser);
      setToken(encodedToken);
      setIsLoading(false);
    }
  } catch (error) {
    const {
      response: { status, statusText },
    } = error;

    setIsLoading(false);
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
export const setUserCredentials = async (
  name,
  email,
  password,
  setToken,
  setCurrentUser,
  setIsLoading,
  setSignUpCredentialError
) => {
  try {
    setSignUpCredentialError(null);
    setIsLoading(true);
    const {
      data: { createdUser, encodedToken },
      status,
    } = await SignUpService({ email, password, name });

    if (status === 200 || status === 201) {
      localStorage.setItem(
        `loginCredentials`,
        JSON.stringify({ token: encodedToken, user: createdUser })
      );

      setSignUpCredentialError(null);
      ToastHandler(ToastType.Success, "Successfully logged in");
      setCurrentUser(createdUser);
      setToken(encodedToken);
      setIsLoading(false);
    }
  } catch (error) {
    setIsLoading(false);
    setSignUpCredentialError(error);
    ToastHandler(
      ToastType.Error,
      error?.response?.data?.errors?.at(0) || "Something went wrong !"
    );
  }
};

//log out page setup
export const removeUserCredentials = (
  setToken,
  setCurrentUser,
  setIsLoading,
  setLoginCredentialError
) => {
  localStorage.removeItem("loginCredentials");
  setLoginCredentialError(null);
  setIsLoading(false);
  setToken(null);
  setCurrentUser(null);
  ToastHandler(ToastType.Success, "Successfully logged out");
};

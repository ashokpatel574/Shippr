import { toast } from "react-toastify";

const validateMobileNumber = (input) => {
  return /^[0-9]+$/.test(input);
};
const validatePinCode = (input) => {
  return /^[0-9]+$/.test(input) && input.length === 6;
};

const validateOnlyString = (input) => {
  return /^[a-z A-Z]+$/.test(input) || input.length === 0;
};

const validateEmail = (input) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    input.toLowerCase()
  );
};
const validatePassword = (input) => {
  return /^(?=.{8,15}$)\D*\d/.test(input);
};

const ToastHandler = (type, message) => {
  const toastConfigObj = {
    position: "top-right",
    autoClose: 1000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  if (type === "error") {
    toast.error(message, toastConfigObj);
  } else if (type === "warn") {
    toast.warn(message, toastConfigObj);
  } else if (type === "success") {
    toast.success(message, toastConfigObj);
  } else if (type === "info") {
    toast.info(message, toastConfigObj);
  }
};

const isProductInWishlist = (wishlist, productId) => {
  return wishlist.some((wishlistItem) => wishlistItem._id === productId);
};

const isProductInCart = (cart, productId) => {
  return cart.some((cartItem) => cartItem._id === productId);
};

export {
  ToastHandler,
  validateEmail,
  validatePassword,
  validateMobileNumber,
  validatePinCode,
  validateOnlyString,
  isProductInWishlist,
  isProductInCart,
};

import { toast } from "react-toastify";

const validateMobileNumber = (input) => {
  return /^[6-9]{1}[0-9]{9}$/.test(input);
};

const validateNumber = (input) => {
  return /^[0-9]+$/.test(input);
};

const validatePinCode = (input) => {
  return /^[0-9]+$/.test(input) && input.length === 6;
};

const validateOnlyString = (input) => {
  return /^[a-z A-Z]+$/.test(input) || input.length === 0;
};

const validateEmail = (input) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    input.toLowerCase()
  );
};

const validatePassword = (input) => {
  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/gm.test(input);
};

const getDeliveryDate = () => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 5);
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);
  return formattedDate;
};

const getCurrentDate = () => {
  return new Date().toJSON().slice(0, 10).split("-").reverse().join("/");
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
  validateNumber,
  validatePinCode,
  validateOnlyString,
  getCurrentDate,
  getDeliveryDate,
  isProductInWishlist,
  isProductInCart,
};

import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";

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
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    input.toLowerCase()
  );
};
const validatePassword = (input) => {
  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/gm.test(input);
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

const Loader = () => (
  <Oval
    height={90}
    width={90}
    color="#3c0ac2"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel="oval-loading"
    secondaryColor="#30089b"
    strokeWidth={3}
    strokeWidthSecondary={3}
  />
);

const isProductInWishlist = (wishlist, productId) => {
  return wishlist.some((wishlistItem) => wishlistItem._id === productId);
};

const isProductInCart = (cart, productId) => {
  return cart.some((cartItem) => cartItem._id === productId);
};

export {
  ToastHandler,
  Loader,
  validateEmail,
  validatePassword,
  validateMobileNumber,
  validateNumber,
  validatePinCode,
  validateOnlyString,
  isProductInWishlist,
  isProductInCart,
};

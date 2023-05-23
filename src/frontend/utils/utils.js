import { toast } from "react-toastify";
import { SortBy } from "../constant";

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

const priceRangeFilter = (data, maxValue) => {
  return data.filter((el) => Number(el.price) <= maxValue);
};

const sortByFilter = (data, sortBy) => {
  if (sortBy === " ") {
    return data;
  }
  return sortBy === SortBy.LowToHigh
    ? [...data].sort((a, b) => a.discountprice - b.discountprice)
    : [...data].sort((a, b) => b.discountprice - a.discountprice);
};

const ratingFilter = (data, ratingValue) => {
  return data.filter((item) => item.rating >= ratingValue);
};

const categoryFilter = (data, categories) => {
  for (let category in categories) {
    if (categories[category]) {
      return data.filter((item) => item.categoryName === category);
    }
  }
  return data;
};

const useFilterData = (products, filters) => {
  const applyFilters = (products, filters) => {
    let filteredData = [...products];
    // const {  categories,  sizes,  search } = filters;

    const { sortBy, priceRange, rating, categories } = filters;

    filteredData = priceRangeFilter(filteredData, priceRange);
    filteredData = sortByFilter(filteredData, sortBy);
    filteredData = ratingFilter(filteredData, rating);
    filteredData = categoryFilter(filteredData, categories);
    return filteredData;
  };

  const newStateData = applyFilters(products, filters);

  return { filteredData: newStateData };
};

export {
  ToastHandler,
  validateEmail,
  validatePassword,
  validateMobileNumber,
  validatePinCode,
  validateOnlyString,
  useFilterData,
};

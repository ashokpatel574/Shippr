import { SortBy } from "../constant";

const priceRangeFilter = (data, maxValue) => {
  return data.filter((item) => Number(item.discountprice) <= maxValue);
};

const sortByFilter = (data, sortBy) => {
  if (sortBy === "") {
    return data;
  }
  return sortBy === SortBy.LowToHigh
    ? [...data].sort((a, b) => a.discountprice - b.discountprice)
    : [...data].sort((a, b) => b.discountprice - a.discountprice);
};

const ratingFilter = (data, ratingValue) => {
  if (ratingValue === "") {
    return data;
  }
  return data.filter((item) => item.rating >= ratingValue);
};

const categoryFilter = (data, categories) => {
  if (categories === "") {
    return data;
  }
  for (let category in categories) {
    if (categories[category]) {
      return data.filter((item) => item.categoryName === category);
    }
  }
  return data;
};

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

export const useFilterData = (products, filters) => {
  const newStateData = applyFilters(products, filters);
  return { filteredData: newStateData };
};

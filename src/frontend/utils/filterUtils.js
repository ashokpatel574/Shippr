import { SortBy } from "../constant";

const priceRangeFilter = (data, maxValue) => {
  return data.filter((item) => Number(item.discountprice) <= maxValue);
};

const sortByFilter = (data, sortBy) => {
  if (sortBy === "") {
    return data;
  }

  switch (true) {
    case sortBy === SortBy.LowToHigh: {
      return [...data].sort((a, b) => a.discountprice - b.discountprice);
    }

    case sortBy === SortBy.HighToLow: {
      return [...data].sort((a, b) => b.discountprice - a.discountprice);
    }

    case sortBy === SortBy.LowRating: {
      return [...data].sort((a, b) => a.rating - b.rating);
    }

    case sortBy === SortBy.HighRating: {
      return [...data].sort((a, b) => b.rating - a.rating);
    }

    default: {
      return data;
    }
  }
};

const ratingFilter = (data, ratingValue) => {
  if (ratingValue === "") {
    return data;
  }
  return data.filter((item) => item.rating >= ratingValue);
};

const categoryFilter = (data, categories) => {
  if (!categories.length) {
    return data;
  }

  return data.filter((listItem) => {
    return categories.some((categoryItem) => {
      return listItem.categoryName === categoryItem;
    });
  });
};

const stockAvailabiltyFilter = (data, stockAvailabilty) => {
  if (!stockAvailabilty.length) {
    return data;
  }

  return data.filter((listItem) => {
    return stockAvailabilty.some((StockItem) => {
      return StockItem === "exculdeOutOfStock" ? listItem.inStock : true;
    });
  });
};

const sizesFilter = (data, sizes) => {
  if (!sizes.length) {
    return data;
  }

  return data.filter((listItem) => {
    return sizes.some((selectedSizeItem) => {
      return listItem.sizes.includes(selectedSizeItem);
    });
  });
};

const searchFilter = (data, searchText) => {
  if (searchText === "") {
    return data;
  }

  return data.filter((productItem) => {
    return productItem.title
      .toLowerCase()
      .includes(searchText.trim().toLowerCase());
  });
};

const applyFilters = (products, filters) => {
  let filteredData = [...products];
  const {
    sortBy,
    priceRange,
    rating,
    categories,
    stockAvailabilty,
    sizes,
    searchText,
  } = filters;

  filteredData = searchFilter(filteredData, searchText);
  filteredData = priceRangeFilter(filteredData, priceRange);
  filteredData = sortByFilter(filteredData, sortBy);
  filteredData = ratingFilter(filteredData, rating);
  filteredData = categoryFilter(filteredData, categories);
  filteredData = stockAvailabiltyFilter(filteredData, stockAvailabilty);
  filteredData = sizesFilter(filteredData, sizes);

  return filteredData;
};

export const useFilterData = (products, filters) => {
  const newStateData = applyFilters(products, filters);
  return { filteredData: newStateData };
};

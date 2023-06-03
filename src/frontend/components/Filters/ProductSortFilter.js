import React from "react";
import { ActionType, Filters, SortBy } from "../../constant";
import { useData } from "../../context/DataContext";

const ProductSortFilter = () => {
  const {
    state: { filters },
    dispatch,
  } = useData();
  const sortChangeHandler = (e) => {
    const { value } = e.target;
    dispatch({
      type: ActionType.ChangeFilter,
      payload: { filterType: Filters.SortBy, filterValue: value },
    });
  };

  return (
    <>
      <div className="sideNavbar_sort-container">
        <p>Sort</p>
        <ul>
          <li>
            <input
              id="LowToHigh"
              type="radio"
              className="LowToHigh"
              name="sortBy"
              value="Low-to-High"
              checked={SortBy.LowToHigh === filters?.sortBy}
              onChange={sortChangeHandler}
            />
            <label htmlFor="LowToHigh"> Price: Low to High</label>
          </li>
          <li>
            <input
              id="HighToLow"
              type="radio"
              className="HighToLow"
              name="sortBy"
              value="High-to-Low"
              checked={SortBy.HighToLow === filters?.sortBy}
              onChange={sortChangeHandler}
            />
            <label htmlFor="HighToLow">Price: High to Low</label>
          </li>
          <li>
            <input
              id="LowRating"
              type="radio"
              className="LowToHigh"
              name="sortBy"
              value="Low-Rating"
              checked={SortBy.LowRating === filters?.sortBy}
              onChange={sortChangeHandler}
            />
            <label htmlFor="LowToHigh"> Rating: Low to High</label>
          </li>
          <li>
            <input
              id="HighRating"
              type="radio"
              className="HighToLow"
              name="sortBy"
              value="High-Rating"
              checked={SortBy.HighRating === filters?.sortBy}
              onChange={sortChangeHandler}
            />
            <label htmlFor="HighToLow">Rating: High to Low</label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProductSortFilter;

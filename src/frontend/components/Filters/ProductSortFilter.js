import React from "react";
import { ActionType, Filters, SortBy } from "../../constant";
import { useData } from "../../context/DataContext";

const ProductSortFilter = () => {
  const { state, dispatch } = useData();
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
              checked={SortBy.LowToHigh === state?.filters?.sortBy}
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
              checked={SortBy.HighToLow === state?.filters?.sortBy}
              onChange={sortChangeHandler}
            />
            <label htmlFor="HighToLow">Price: High to Low</label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProductSortFilter;

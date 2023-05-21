import React from "react";

const ProductSortFilter = () => {
  return (
    <>
      <div className="sideNavbar_sort-container">
        <p>Sort</p>
        <ul>
          <li>
            <input
              id="LowToHigh"
              type="checkbox"
              className="LowToHigh"
              name="sortBy"
            />
            <label htmlFor="LowToHigh"> Price: Low to High</label>
          </li>
          <li>
            <input
              id="HighToLow"
              type="checkbox"
              className="HighToLow"
              name="sortBy"
            />
            <label htmlFor="HighToLow">Price: High to Low</label>
          </li>
          <li>
            <input
              id="customerRatingSort"
              type="checkbox"
              className="customerRatingSort"
              name="sortBy"
            />
            <label htmlFor="customerRatingSort">Customer Rating</label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProductSortFilter;

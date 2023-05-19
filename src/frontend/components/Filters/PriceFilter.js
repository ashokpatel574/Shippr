import React from "react";

const PriceFilter = () => {
  return (
    <div>
      <div className="sideNavbar_price-container">
        <p>Price</p>
        <div className="sideNavbar_priceRange-container">
          <label htmlFor="priceRange">
            <span className="priceRange-minPrice">0</span>
            <input
              id="priceRange"
              type="range"
              min="0"
              max="100"
              step="20"
              name="priceRange"
              className="priceRange"
            />
            <span className="priceRange-maxPrice">2500</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;

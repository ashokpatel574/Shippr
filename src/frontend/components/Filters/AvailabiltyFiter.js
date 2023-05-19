import React from "react";

const AvailabiltyFiter = () => {
  return (
    <>
      <div className="sideNavbar_availablity-container">
        <p>Availablity</p>
        <ul>
          <li>
            <input
              id="availablityStockExclude"
              type="checkbox"
              className="availablityStockExclude"
              name="availablityStockExclude"
            />
            <label htmlFor="availablityStockExclude">
              Exclude Out of Stock
            </label>
          </li>
          <li>
            <input
              id="availablityStockInclude"
              type="checkbox"
              className="availablityStockInclude"
              name="availablityStockInclude"
            />
            <label htmlFor="availablityStockInclude">
              Include Out of Stock
            </label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AvailabiltyFiter;

import React from "react";

const RatingFilter = () => {
  return (
    <>
      <div className="sideNavbar_customerRating-container">
        <p> Customer Rating</p>
        <ul>
          <li>
            <input
              id="productRating-4"
              type="checkbox"
              className="productRating"
              name="productRating"
            />
            <label htmlFor="productRating-4"> 4 and above</label>
          </li>
          <li>
            <input
              id="productRating-3"
              type="checkbox"
              className="productRating"
              name="productRating"
            />
            <label htmlFor="productRating-3"> 3 and above</label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default RatingFilter;

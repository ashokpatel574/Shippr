import React from "react";

const ProductCategoryFilter = () => {
  return (
    <>
      <div className="sideNavbar_category-container">
        <p>Category</p>
        <ul>
          <li>
            <input
              id="categoryTshirt"
              type="checkbox"
              className="categoryTshirt"
              name="tshirt"
            />
            <label htmlFor="categoryTshirt">T-Shirt</label>
          </li>
          <li>
            <input
              id="categoryTshirt"
              type="checkbox"
              className="categoryTshirt"
              name="losseTshirt"
            />
            <label htmlFor="categoryTshirt">Loose T-Shirt</label>
          </li>
          <li>
            <input
              id="categoryTshirt"
              type="checkbox"
              className="categoryTshirt"
              name="shirt"
            />
            <label htmlFor="categoryTshirt">Shirt</label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProductCategoryFilter;

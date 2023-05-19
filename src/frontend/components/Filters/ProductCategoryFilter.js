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
              name="categoryTshirt"
            />
            <label htmlFor="categoryTshirt"> T-Shirt</label>
          </li>
          <li>
            <input
              id="categoryTshirt"
              type="checkbox"
              className="categoryTshirt"
              name="categoryTshirt"
            />
            <label htmlFor="categoryTshirt"> T-Shirt</label>
          </li>
          <li>
            <input
              id="categoryTshirt"
              type="checkbox"
              className="categoryTshirt"
              name="categoryTshirt"
            />
            <label htmlFor="categoryTshirt"> T-Shirt</label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProductCategoryFilter;

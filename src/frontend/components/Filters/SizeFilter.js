import React from "react";

const SizeFilter = () => {
  return (
    <>
      <div className="sideNavbar_size-container">
        <p>Size</p>
        <ul>
          <li>
            <input
              id="productSize-s"
              type="checkbox"
              className="productSize-s"
              name="s"
            />
            <label htmlFor="productSize-s"> S</label>
          </li>
          <li>
            <input
              id="productSize-m"
              type="checkbox"
              className="productSize-m"
              name="m"
            />
            <label htmlFor="productSize-m"> M</label>
          </li>
          <li>
            <input
              id="productSize-l"
              type="checkbox"
              className="productSize-l"
              name="l"
            />
            <label htmlFor="productSize-l"> L</label>
          </li>
          <li>
            <input
              id="productSize-xl"
              type="checkbox"
              className="productSize-xl"
              name="xl"
            />
            <label htmlFor="productSize-xl"> XL</label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SizeFilter;

import React from "react";
import { useData } from "../../context/DataContext";
import { ActionType, Filters } from "../../constant";

const SizeFilter = () => {
  const {
    state: { filters },
    dispatch,
  } = useData();

  const SizeFilterHandler = (e) => {
    const { name, checked } = e.target;

    dispatch({
      type: ActionType.ChangeFilter,
      payload: {
        filterType: Filters.Sizes,
        filterValue: checked
          ? [...filters.sizes, name]
          : [...filters.sizes.filter((item) => item !== name)],
      },
    });
  };

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
              checked={filters.sizes?.includes("s")}
              onChange={SizeFilterHandler}
            />
            <label htmlFor="productSize-s"> S</label>
          </li>
          <li>
            <input
              id="productSize-m"
              type="checkbox"
              className="productSize-m"
              name="m"
              checked={filters.sizes?.includes("m")}
              onChange={SizeFilterHandler}
            />
            <label htmlFor="productSize-m"> M</label>
          </li>
          <li>
            <input
              id="productSize-l"
              type="checkbox"
              className="productSize-l"
              name="l"
              checked={filters.sizes?.includes("l")}
              onChange={SizeFilterHandler}
            />
            <label htmlFor="productSize-l"> L</label>
          </li>
          <li>
            <input
              id="productSize-xl"
              type="checkbox"
              className="productSize-xl"
              name="xl"
              checked={filters.sizes?.includes("xl")}
              onChange={SizeFilterHandler}
            />
            <label htmlFor="productSize-xl"> XL</label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SizeFilter;

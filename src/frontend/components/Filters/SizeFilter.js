import React, { useState } from "react";
import { useData } from "../../context/DataContext";
import { ActionType, Filters } from "../../constant";

const SizeFilter = () => {
  const [sizeslist] = useState(["s", "m", "l", "xl"]);

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
        <ul className="flex-column flex-start gap-m">
          {sizeslist.map((sizeListItem, id) => (
            <li key={id} className="flex-center gap-s">
              <input
                id={`productSize-${sizeListItem}`}
                type="checkbox"
                name={sizeListItem}
                checked={filters.sizes?.includes(sizeListItem)}
                onChange={SizeFilterHandler}
              />
              <label htmlFor={`productSize-${sizeListItem}`}>
                {sizeListItem.toUpperCase()}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SizeFilter;

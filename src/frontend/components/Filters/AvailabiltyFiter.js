import React from "react";
import { useData } from "../../context/DataContext";
import { ActionType } from "../../constant";

const AvailabiltyFiter = () => {
  const {
    state: { filters },
    dispatch,
  } = useData();

  const availabiltyFiterHandler = (e) => {
    const { name, checked } = e.target;

    dispatch({
      type: ActionType.ChangeFilter,
      payload: {
        filterType: "stockAvailabilty",
        filterValue: checked
          ? [...filters.stockAvailabilty, name]
          : [...filters.stockAvailabilty.filter((item) => item !== name)],
      },
    });
  };

  return (
    <>
      <div className="sideNavbar_availablity-container">
        <p>Availablity</p>
        <ul className="flex-column flex-start gap-m">
          <li className="flex-center gap-s">
            <input
              id="availablityStockExclude"
              type="checkbox"
              className="availablityStockExclude"
              name="exculdeOutOfStock"
              checked={filters.stockAvailabilty.includes("exculdeOutOfStock")}
              onChange={availabiltyFiterHandler}
            />
            <label htmlFor="availablityStockExclude">
              Exclude Out of Stock
            </label>
          </li>
          <li className="flex-center gap-s">
            <input
              id="availablityStockInclude"
              type="checkbox"
              className="availablityStockInclude"
              name="inculdeOutOfStock"
              checked={filters.stockAvailabilty.includes("inculdeOutOfStock")}
              onChange={availabiltyFiterHandler}
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

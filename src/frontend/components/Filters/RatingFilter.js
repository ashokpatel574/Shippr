import React from "react";
import { useData } from "../../context/DataContext";
import { ActionType, Filters } from "../../constant";

const RatingFilter = () => {
  const { state, dispatch } = useData();

  const ratingFilterChangeHandler = (e) => {
    dispatch({
      type: ActionType.ChangeFilter,
      payload: { filterType: Filters.Rating, filterValue: e.target.value },
    });
  };

  return (
    <>
      <div className="sideNavbar_customerRating-container">
        <p> Customer Rating</p>
        <ul>
          <li>
            <input
              id="productRating-4"
              type="radio"
              className="productRating"
              name="productRating"
              value={4}
              checked={state?.filters?.rating === "4"}
              onChange={ratingFilterChangeHandler}
            />
            <label htmlFor="productRating-4"> 4 and above</label>
          </li>
          <li>
            <input
              id="productRating-3"
              type="radio"
              className="productRating"
              name="productRating"
              value={3}
              checked={state?.filters?.rating === "3"}
              onChange={ratingFilterChangeHandler}
            />
            <label htmlFor="productRating-3"> 3 and above</label>
          </li>
          <li>
            <input
              id="productRating-3"
              type="radio"
              className="productRating"
              name="productRating"
              value={2}
              checked={state?.filters?.rating === "2"}
              onChange={ratingFilterChangeHandler}
            />
            <label htmlFor="productRating-3"> 2 and above</label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default RatingFilter;

import React from "react";
import { useData } from "../../context/DataContext";
import { ActionType, Filters } from "../../constant";
import StarIcon from "@mui/icons-material/Star";

const RatingFilter = () => {
  const {
    state: { filters },
    dispatch,
  } = useData();

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
              checked={filters?.rating === "4"}
              onChange={ratingFilterChangeHandler}
            />
            <label htmlFor="productRating-4">
              4 <StarIcon className="starIcon" /> and above
            </label>
          </li>
          <li>
            <input
              id="productRating-3"
              type="radio"
              className="productRating"
              name="productRating"
              value={3}
              checked={filters?.rating === "3"}
              onChange={ratingFilterChangeHandler}
            />
            <label htmlFor="productRating-3">
              3 <StarIcon className="starIcon" /> and above
            </label>
          </li>
          <li>
            <input
              id="productRating-3"
              type="radio"
              className="productRating"
              name="productRating"
              value={2}
              checked={filters?.rating === "2"}
              onChange={ratingFilterChangeHandler}
            />
            <label htmlFor="productRating-3">
              2 <StarIcon className="starIcon" /> and above
            </label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default RatingFilter;

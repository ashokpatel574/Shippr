import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { useData } from "../../context/DataContext";
import { ActionType, Filters } from "../../constant";

const RatingFilter = () => {
  const [customerRating] = useState([4, 3, 2]);
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
        <ul className="flex-column flex-start gap-m">
          {customerRating?.map((ratingItem, id) => (
            <li key={id} className="flex-center gap-s">
              <input
                id={`productRating-${ratingItem}`}
                type="radio"
                className="productRating"
                name="productRating"
                value={ratingItem}
                checked={filters?.rating === ratingItem.toString()}
                onChange={ratingFilterChangeHandler}
              />
              <label htmlFor={`productRating-${ratingItem}`}>
                {ratingItem} <StarIcon className="starIcon" /> and above
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RatingFilter;

import React from "react";

// import { useData } from "../../context/DataContext";
import { useNavigate } from "react-router-dom";
// import { ActionType } from "../../constant";
// import { Filters } from "../../constant";

import categoriesShirt from "../../../assets/categoryImg/categoryShirtImg.webp";
import categoriesTshirt from "../../../assets/categoryImg/categoryTshirtImg.webp";
import categoriesLooseTshirt from "../../../assets/categoryImg/categoryLooseTshirtImg.webp";

const CategoriesContainer = () => {
  const navigate = useNavigate();
  // const { state, dispatch } = useData();

  const categoryFilterHandler = (category) => {
    // dispatch({
    //   type: ActionType.ChangeFilter,
    //   payload: {
    //     filterType: Filters.Categories,
    //     filterValue: {
    //       ...Object.keys(state.filters.categories).reduce((acc, curr) => {
    //         return { ...acc, [curr]: false };
    //       }, {}),
    //       [category]: true,
    //     },
    //   },
    // });
    navigate("/products");
  };

  return (
    <section className="categories_container">
      <h2>Categories</h2>

      <div className="categories_wrapper ">
        <div className="categories_wrap">
          <div
            onClick={() => categoryFilterHandler("T-shirt")}
            className="categories_card"
          >
            <div className="categories_image-box">
              <img
                src={categoriesTshirt}
                alt="Category for T-Shirt"
                className="categories_image "
              />
            </div>
          </div>
        </div>

        <div className="categories_wrap">
          <div
            onClick={() => categoryFilterHandler("Shirt")}
            className="categories_card"
          >
            <div className="categories_image-box">
              <img
                src={categoriesShirt}
                alt="Category for Shirt"
                className="categories_image "
              />
            </div>
          </div>
        </div>

        <div className="categories_wrap">
          <div
            onClick={() => categoryFilterHandler("Loose_T-shirt")}
            className="categories_card"
          >
            <div className="categories_image-box">
              <img
                src={categoriesLooseTshirt}
                alt="Category for Loose T-shirt"
                className="categories_image "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesContainer;

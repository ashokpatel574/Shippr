import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeroImg from "../../assets/HeroImg/HeroImgOne.webp";
import categoriesShirt from "../../assets/categoryImg/categoryShirtImg.webp";
import categoriesTshirt from "../../assets/categoryImg/categoryTshirtImg.webp";
import categoriesLooseTshirt from "../../assets/categoryImg/categoryLooseTshirtImg.webp";

import { useData } from "../context/DataContext";
import { ActionType } from "../constant";
import { Filters } from "../constant";

const Home = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useData();

  useEffect(() => {
    dispatch({ type: ActionType.ClearFilter });
  }, []);

  const categoryFilterHandler = (category) => {
    dispatch({
      type: ActionType.ChangeFilter,
      payload: {
        filterType: Filters.Categories,
        filterValue: {
          ...Object.keys(state.filters.categories).reduce((acc, curr) => {
            return { ...acc, [curr]: false };
          }, {}),
          [category]: true,
        },
      },
    });
    navigate("/products");
  };
  return (
    <article className="hero_container">
      <div className="heroImg_container">
        <Link to="products">
          <img src={HeroImg} alt="Hero" />
        </Link>
      </div>
      <section className="categories_container">
        <h2>Categories</h2>

        <div className="categories_wrapper ">
          {/* {state?.categories?.map(({ _id, image, categoryName }) => (
            <li key={_id} className="categories_wrap">
              <div className="categories_card">
                <div className="categories_image-box">
                  <img
                    src={image}
                    alt={`Category for ${categoryName}`}
                    className="categories_image "
                  />
                </div>
              </div>
            </li>
          ))} */}

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
    </article>
  );
};

export default Home;

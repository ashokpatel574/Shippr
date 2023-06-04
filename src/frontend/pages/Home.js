import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import HeroImg from "../../assets/HeroImg/HeroImgOne.webp";
import { useData } from "../context/DataContext";
import CategoriesContainer from "../components/category/CategoriesContainer";

import { ActionType } from "../constant";

const Home = () => {
  const { dispatch } = useData();

  useEffect(() => {
    dispatch({ type: ActionType.ClearFilter });
  }, []);

  return (
    <article className="hero_container fillContainer ">
      <div className="heroImg_container fillContainer padding-tp-btm-xxl">
        <Link to="products">
          <img src={HeroImg} alt="Hero" className="fillContainer" />
          <span>Explore</span>
        </Link>
      </div>

      <CategoriesContainer />
    </article>
  );
};

export default Home;

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
    <article className="hero_container ">
      <div className="heroImg_container">
        <Link to="products">
          <img src={HeroImg} alt="Hero" />
        </Link>
      </div>

      <CategoriesContainer />
    </article>
  );
};

export default Home;

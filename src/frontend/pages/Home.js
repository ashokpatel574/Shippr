import { Link } from "react-router-dom";
import { useEffect } from "react";

import HeroImg from "../../assets/HeroImg/HeroImgOne.webp";
import { useData } from "../context/DataContext";
import CategoriesContainer from "../components/category/CategoriesContainer";
import Loader from "../components/loader/Loader";

import { ActionType } from "../constant";

const Home = () => {
  const { dispatch, isLoading } = useData();

  useEffect(() => {
    dispatch({ type: ActionType.ClearFilter });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <article className="hero_container fillContainer ">
          <div className="heroImg_container fillContainer padding-tp-btm-xxl">
            <Link to="products">
              <img src={HeroImg} alt="Hero" className="fillContainer" />
              <span>Explore</span>
            </Link>
          </div>
          <CategoriesContainer />
        </article>
      )}
    </>
  );
};

export default Home;

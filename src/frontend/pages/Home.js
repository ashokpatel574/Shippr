import { Link } from "react-router-dom";
import { useData } from "../context/DataContext";
import CategoriesContainer from "../components/category/CategoriesContainer";
import Loader from "../components/loader/Loader";

import HeroImgWide from "../../assets/HeroImg/heroImg-wideframe.webp";
import HeroImgMedium from "../../assets/HeroImg/heroImg-mediumframe.webp";
import HeroImgSmall from "../../assets/HeroImg/heroImg-mobileframe.webp";

const Home = () => {
  const { isLoading } = useData();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <article className="hero_container fillContainer">
          <div className="heroImg_container fillContainer">
            <Link to="products">
              <picture>
                <source media="(max-width: 950px)" srcSet={HeroImgMedium} />
                <source media="(max-width: 800px)" srcSet={HeroImgSmall} />
                <img src={HeroImgWide} alt="Hero" className="fillContainer" />
              </picture>

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

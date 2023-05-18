import React from "react";
import HeroImg from "../../assets/HeroImg/HeroImgOne.webp";
import categoriesShirt from "../../assets/categoryImg/categoryShirtImg.webp";
import categoriesTshirt from "../../assets/categoryImg/categoryTshirtImg.webp";
import categoriesLooseTshirt from "../../assets/categoryImg/categoryLooseTshirtImg.webp";

const Home = () => {
  return (
    <article className="hero_container">
      <div className="heroImg_container">
        <img src={HeroImg} alt="Hero" />
      </div>
      <section className="categories_container">
        <h2>Categories</h2>

        <div className="categories_wrapper  ">
          <div className="categories_wrap">
            <div className="categories_card">
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
            <div className="categories_card">
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
            <div className="categories_card">
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

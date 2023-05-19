import React from "react";

import { products } from "../../backend/db/products";
import AvailabiltyFiter from "../components/Filters/AvailabiltyFiter";
import ProductCategoryFilter from "../components/Filters/ProductCategoryFilter";
import PriceFilter from "../components/Filters/PriceFilter";
import SizeFilter from "../components/Filters/SizeFilter";
import ProductSortFilter from "../components/Filters/ProductSortFilter";
import ProductCard from "../components/ProductCard/ProductCard";
import RatingFilter from "../components/Filters/RatingFilter";

const ProductListingPage = () => {
  return (
    <>
      <section className="productsListing_main-container grid-productsListlayout-container  ">
        <aside className="productslisting_side-navbar">
          <div className="productslisting_side-navbar-title-conatiner">
            <span>Filters</span> <span>Clear All</span>
          </div>
          <ProductCategoryFilter />
          <PriceFilter />
          <SizeFilter />
          <RatingFilter />
          <ProductSortFilter />
          <AvailabiltyFiter />
        </aside>
        <article className="productsListing_container">
          <ul>
            {products?.map((productItem) => (
              <ProductCard productItem={productItem} />
            ))}
          </ul>
        </article>
      </section>
    </>
  );
};

export default ProductListingPage;

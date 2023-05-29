import React from "react";

import ProductCard from "../components/productCard/ProductCard";

import FilterMain from "../components/filters/FilterMain";
import { useData } from "../context/DataContext";

const ProductListingPage = () => {
  const { filteredData } = useData();

  return (
    <>
      <section className="productsListing_main-container grid-productsListlayout-container  ">
        <aside className="productslisting_side-navbar">
          <FilterMain />
        </aside>
        <article className="productsListing_container ">
          <ul className=" flex-space-evenly flex-wrap ">
            {filteredData?.map((productItem, id) => (
              <ProductCard productItem={productItem} key={id} />
            ))}
          </ul>
        </article>
      </section>
    </>
  );
};

export default ProductListingPage;

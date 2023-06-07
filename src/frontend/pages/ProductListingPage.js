import { useState } from "react";

import ProductCard from "../components/ProductCard/ProductCard";
import FilterMain from "../components/Filters/FilterMain";
import { useData } from "../context/DataContext";
import NoProductData from "../../assets/wishlist/wishlistEmpty.png";
import Loader from "../components/loader/Loader";
import MenuIcon from "@mui/icons-material/Menu";

const ProductListingPage = () => {
  const {
    filteredData,
    state: { products },
    isLoading,
    filterDrawer,
    setFilterDrawer,
  } = useData();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="productsListing_main-container grid-productsListlayout-container gap-l  ">
          <aside
            className={`productslisting_side-navbar ${filterDrawer && "open"}`}
          >
            <FilterMain />
          </aside>
          <article className="productsListing_container padding-m ">
            <div className="productList-NavBar flex-space-between gap-l">
              <span
                onClick={() => setFilterDrawer(!filterDrawer)}
                className="productList-NavBar-title flex-center gap-xs"
              >
                <MenuIcon /> <span> Filters </span>
              </span>
              <span className="productsListing_container-title">
                Showing products {filteredData.length} of {products.length}
              </span>
            </div>

            {filteredData.length ? (
              <ul className=" flex-wrap flex-space-evenly gap-xl ">
                {filteredData?.map((productItem, id) => (
                  <ProductCard productItem={productItem} key={id} />
                ))}
              </ul>
            ) : (
              <article className="emptyWishlist_Container padding-l flex-column flex-center ">
                <div className="emptyWishlist_Img-Container fillContainer">
                  <img
                    src={NoProductData}
                    alt="empty wishlist"
                    width="400px"
                    height="400px"
                  />
                </div>
                <div className="emptyWishlist_text-Container ">
                  <p>Opps! No product data found for applied filter</p>
                </div>
              </article>
            )}
          </article>
        </section>
      )}
    </>
  );
};

export default ProductListingPage;

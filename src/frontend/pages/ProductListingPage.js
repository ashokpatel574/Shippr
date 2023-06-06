import ProductCard from "../components/productCard/ProductCard";
import FilterMain from "../components/filters/FilterMain";
import { useData } from "../context/DataContext";
import NoProductData from "../../assets/wishlist/wishlistEmpty.png";
import Loader from "../components/loader/Loader";

const ProductListingPage = () => {
  const {
    filteredData,
    state: { products },
    isLoading,
  } = useData();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="productsListing_main-container grid-productsListlayout-container gap-l  ">
          <aside className="productslisting_side-navbar">
            <FilterMain />
          </aside>
          <article className="productsListing_container padding-l ">
            <span className="productsListing_container-title">
              Showing products {filteredData.length} of {products.length}
            </span>

            {filteredData.length ? (
              <ul className=" flex-wrap gap-xl ">
                {filteredData?.map((productItem, id) => (
                  <ProductCard productItem={productItem} key={id} />
                ))}
              </ul>
            ) : (
              <article className="emptyWishlist_Container padding-xxl flex-column flex-center ">
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

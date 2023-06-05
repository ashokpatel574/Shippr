import ProductCard from "../components/productCard/ProductCard";

import FilterMain from "../components/filters/FilterMain";
import { useData } from "../context/DataContext";

const ProductListingPage = () => {
  const {
    filteredData,
    state: { products },
  } = useData();

  return (
    <>
      <section className="productsListing_main-container grid-productsListlayout-container gap-l  ">
        <aside className="productslisting_side-navbar">
          <FilterMain />
        </aside>
        <article className="productsListing_container padding-l ">
          <span className="productsListing_container-title">
            Showing products {filteredData.length} of {products.length}
          </span>
          <ul className=" flex-wrap gap-xl ">
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

import React from "react";
import { products } from "../../backend/db/products";
import WishListProductCard from "../components/WishListProductCard/WishListProductCard";

const WishListPage = () => {
  return (
    <article className="wishListpage_container">
      <section className="wishList_container">
        <h3 className="wishListpage_productDetails-title">
          Total WishList Items : 05
        </h3>
        <ul className="wishListpage_productList">
          {products?.map((productItem, id) => (
            <WishListProductCard productItem={productItem} key={id} />
          ))}
        </ul>
      </section>
    </article>
  );
};

export default WishListPage;

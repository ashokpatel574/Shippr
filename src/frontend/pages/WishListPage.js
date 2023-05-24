import React from "react";
import WishListCard from "../components/wishList/WishListCard";
import { useData } from "../context/DataContext";

const WishListPage = () => {
  const { state } = useData();

  return (
    <article className="wishListpage_container">
      <section className="wishList_container">
        <h3 className="wishListpage_productDetails-title">
          Total Wishlist Items : {state?.wishlist?.length}
        </h3>
        <ul className="wishListpage_productList">
          {state?.wishlist?.map((wishlistItem, id) => (
            <WishListCard wishlistItem={wishlistItem} key={id} />
          ))}
        </ul>
      </section>
    </article>
  );
};

export default WishListPage;

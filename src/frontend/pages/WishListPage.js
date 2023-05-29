import React from "react";
import WishListCard from "../components/wishList/WishListCard";
import { useData } from "../context/DataContext";

const WishListPage = () => {
  const { state } = useData();

  return (
    <article className="wishListpage_section">
      <section className="wishList_container flex-column">
        <h3 className="wishListpage_title">
          Total Wishlist Items :{" "}
          {String(state?.wishlist?.length).padStart(2, 0)}
        </h3>
        <ul className="wishListpage_wishlistCart-list flex-space-evenly flex-wrap ">
          {state?.wishlist?.map((wishlistItem, id) => (
            <WishListCard wishlistItem={wishlistItem} key={id} />
          ))}
        </ul>
      </section>
    </article>
  );
};

export default WishListPage;

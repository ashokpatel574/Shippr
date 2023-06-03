import React from "react";
import WishListCard from "../components/wishList/WishListCard";
import { useData } from "../context/DataContext";
import EmptyWishList from "../../assets/wishlist/wishlistEmpty.png";

//import Ep from "../../assets/wishlist/wishlist.png";

import { useNavigate } from "react-router-dom";

const WishListPage = () => {
  const {
    state: { wishlist },
  } = useData();
  const navigate = useNavigate();

  return (
    <article className="wishListpage_section">
      {!wishlist.length && (
        <div className="emptyWishlist_Container flex-column flex-center">
          <div className="emptyWishlist_Img-Container">
            <img
              src={EmptyWishList}
              alt="empty wishlist"
              width="400px"
              height="400px"
            />
          </div>
          <div className="emptyWishlist_text-Container flex-column flex-center">
            <h3>WishList is Empty!</h3>
            <p>Explore more and shortlist some items</p>
            <button
              onClick={() => navigate("/products")}
              className="btn shoppingExploreBtn"
            >
              Start Shopping
            </button>
          </div>
        </div>
      )}
      {wishlist.length > 0 && (
        <section className="wishList_container flex-column ">
          <h3 className="wishListpage_title">
            Total Wishlist Items : {String(wishlist?.length).padStart(2, 0)}
          </h3>

          <ul className="wishListpage_wishlistCart-list flex-space-evenly flex-wrap ">
            {wishlist?.map((wishlistItem, id) => (
              <WishListCard wishlistItem={wishlistItem} key={id} />
            ))}
          </ul>
        </section>
      )}
    </article>
  );
};

export default WishListPage;

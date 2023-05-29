import React from "react";

import { useNavigate, useLocation } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";

import { isProductInCart } from "../../utils/utils";
import CloseIcon from "@mui/icons-material/Close";

import { PostCartItem } from "../../utils/apiUtils";
import { ToastHandler } from "../../utils/utils";
import { ToastType } from "../../constant";

import { DeleteWishListItem } from "../../utils/apiUtils";

const WishListCard = ({ wishlistItem }) => {
  const {
    _id: wishlistId,
    title,
    images,
    price,
    discountpercent,
    discountprice,
    rating,
  } = wishlistItem;

  const { token } = useAuth();
  const { state, dispatch } = useData();
  const navigate = useNavigate();
  const location = useLocation();

  const wishlistCardClickHandler = () => {
    const route = `/products/${wishlistId}`;
    navigate(route);
  };

  const inCartList = isProductInCart(state.cartlist, wishlistId);

  const addToCartBtnHandler = (wishlistItem) => {
    inCartList
      ? navigate(`/cart`)
      : PostCartItem({
          product: wishlistItem,
          encodedToken: token,
          dispatch: dispatch,
        });

    !inCartList && ToastHandler(ToastType.Success, "Added to cart");
  };

  const removeWishlistHandler = (wishlistId) => {
    if (!token) {
      navigate("/login", { state: { from: location } });
    } else {
      DeleteWishListItem({
        productId: wishlistId,
        encodedToken: token,
        dispatch: dispatch,
      });

      ToastHandler(ToastType.Warn, "Removed from wishlist");
    }
  };

  return (
    <li key={title} className="wishList_card-container flex-column">
      <div className="wishlist_card-imgContainer">
        <img src={images[0]} alt={title} onClick={wishlistCardClickHandler} />
        <span className="product-rating">{rating}</span>
        <span
          onClick={() => removeWishlistHandler(wishlistId)}
          className="wishListIcon_container remove-card  flex-center"
        >
          <CloseIcon className="closeIcon" />
        </span>
      </div>
      <div className="productsListing_card-textContainer">
        <p>{title}</p>
        <p className="productsListing_card-priceContainer">
          <span className="discountPrice">Rs.{discountprice}</span>
          <span className="totalPrice">Rs.{price}</span>

          <span className="discountPercent">
            {`(${discountpercent * 100}OFF%)`}
          </span>
        </p>
        <div>
          <button
            onClick={() => addToCartBtnHandler(wishlistItem)}
            className="btn"
          >
            {inCartList ? "Go to Cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </li>
  );
};

export default WishListCard;

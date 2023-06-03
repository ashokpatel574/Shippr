import React from "react";
import CartFilter from "./CartFilter";

import { isProductInWishlist } from "../../utils/utils";
import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router";
import {
  PostWishListItem,
  DeleteWishListItem,
  DeleteCartItem,
} from "../../utils/apiUtils";

import { ToastHandler } from "../../utils/utils";
import { ToastType } from "../../constant";

const CartCard = ({ cartItem }) => {
  const {
    _id: cartId,
    title,
    images,
    price,
    discountpercent,
    discountprice,
    sizes,
    qty,
  } = cartItem;

  const {
    state: { wishlist },
    dispatch,
  } = useData();

  const { token } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const inWishList = isProductInWishlist(wishlist, cartId);

  const wishlistHandler = () => {
    if (!token) {
      navigate("/login", { state: { from: location } });
    } else {
      inWishList
        ? DeleteWishListItem({
            productId: cartId,
            encodedToken: token,
            dispatch: dispatch,
          })
        : PostWishListItem({
            product: cartItem,
            encodedToken: token,
            dispatch: dispatch,
          });

      inWishList
        ? ToastHandler(ToastType.Warn, "Removed from wishlist")
        : ToastHandler(ToastType.Success, "Added to wishlist");
    }
  };

  const removeCartItemHandler = (cartId) => {
    DeleteCartItem({
      productId: cartId,
      encodedToken: token,
      dispatch: dispatch,
    });

    ToastHandler(ToastType.Warn, "Removed from cart");
  };

  return (
    <div className="cartpage_productDetails-card flex-column">
      <div className="product_info-container flex-space-between">
        <div className="product_info-partOne flex-column flex-start">
          <p className="product_info-partOne-title">{title}</p>
          <div className="cartProduct_priceContainer">
            <span className="discountPrice">Rs. {discountprice}</span>
            <span className="totalPrice">Rs. {price}</span>

            <span className="discountPercent">
              {`(${discountpercent * 100} OFF%)`}
            </span>
          </div>
          <p className="savedPrice">
            You saved Rs. {Math.ceil(discountpercent * price)} !
          </p>

          <div className="cartProduct_filterContainer">
            <CartFilter sizes={sizes} qty={qty} cartId={cartId} />
          </div>
        </div>
        <div className="product_info-partTwo">
          <img src={images[0]} alt={title} />
        </div>
      </div>
      <div className="cartProduct_btnContainer">
        <span>
          <button
            onClick={() => removeCartItemHandler(cartId)}
            className="btn removeCartBtn"
          >
            Remove from cart
          </button>
        </span>
        <span>
          <button onClick={wishlistHandler} className="btn addToWishListBtn">
            {inWishList ? "Remove from Wishlist" : "Add to wishlist"}
          </button>
        </span>
      </div>
    </div>
  );
};

export default CartCard;

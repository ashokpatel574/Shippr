import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate, useLocation } from "react-router";
import { useAuth } from "../../context/AuthContext";

import { useData } from "../../context/DataContext";
import { isProductInWishlist, isProductInCart } from "../../utils/utils";
import {
  DeleteWishListItem,
  PostWishListItem,
  PostCartItem,
} from "../../utils/apiUtils";
import { ToastHandler } from "../../utils/utils";
import { ToastType } from "../../constant";

const ProductCard = ({ productItem }) => {
  const {
    _id: productId,
    title,
    images,
    price,
    discountpercent,
    discountprice,
    rating,
    inStock,
    sizes,
  } = productItem;

  const { token } = useAuth();
  const {
    state: { wishlist, cartlist },
    dispatch,
  } = useData();

  const navigate = useNavigate();
  const location = useLocation();

  const productCardClickHandler = () => {
    const route = `/products/${productId}`;
    !inStock
      ? ToastHandler(ToastType.Warn, "Product is out of stock")
      : navigate(route);
  };

  const SizeAvailable = !sizes.length
    ? "Not available"
    : sizes.map((s) => s.toUpperCase()).join(", ");

  const inWishList = isProductInWishlist(wishlist, productId);
  const inCartList = isProductInCart(cartlist, productId);

  const wishlistHandler = () => {
    if (!token) {
      navigate("/login", { state: { from: location } });
    } else {
      inWishList
        ? DeleteWishListItem({
            productId: productId,
            encodedToken: token,
            dispatch: dispatch,
          })
        : PostWishListItem({
            product: productItem,
            encodedToken: token,
            dispatch: dispatch,
          });

      inWishList
        ? ToastHandler(ToastType.Warn, "Removed from wishlist")
        : ToastHandler(ToastType.Success, "Added to wishlist");
    }
  };

  const addToCartBtnHandler = (productItem) => {
    inCartList
      ? navigate(`/cart`)
      : PostCartItem({
          product: productItem,
          encodedToken: token,
          dispatch: dispatch,
        });

    !inCartList && ToastHandler(ToastType.Success, "Added to cart");
  };

  return (
    <li
      key={productId}
      className={` productsListing_container-card ${
        !inStock && "InStock"
      } flex-column flex-justify-center`}
    >
      {!inStock && <span className="OutOfStock">Out of stock</span>}
      <div className="productsListing_card-imgContainer">
        <img src={images[0]} alt={title} onClick={productCardClickHandler} />
        <span className="product-rating">{rating}</span>
        {inStock && (
          <span
            onClick={wishlistHandler}
            className={`${
              inWishList && "selected"
            } wishListIcon_container flex-center `}
          >
            {inWishList ? (
              <FavoriteIcon className="wishListIcon selected" />
            ) : (
              <FavoriteBorderIcon className="wishListIcon " />
            )}
          </span>
        )}
      </div>
      <div className="productsListing_card-textContainer flex-start flex-column">
        <p className="productsListing_card-title">{title}</p>
        <p>Sizes: {SizeAvailable}</p>
        <p className="productsListing_card-priceContainer flex-center">
          <span className="discountPrice">Rs.{discountprice}</span>
          <span className="totalPrice txt-crossed-off">Rs.{price}</span>

          <span className="discountPercent">
            {`(${discountpercent * 100} OFF%)`}
          </span>
        </p>

        <button
          disabled={!inStock}
          onClick={() => addToCartBtnHandler(productItem)}
          className="btn addToCartBtn"
        >
          {!inStock
            ? "Out of stock"
            : inCartList
            ? "Go to Cart"
            : "Add to cart"}
        </button>
      </div>
    </li>
  );
};

export default ProductCard;

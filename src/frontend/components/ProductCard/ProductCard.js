import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { useNavigate } from "react-router";

const ProductCard = ({ productItem }) => {
  const [wishListToggleButton, setWishListToggleButton] = useState(false);
  const { _id, title, images, price, discountpercent, discountprice, rating } =
    productItem;

  const toggleWishListButton = () => {
    setWishListToggleButton(!wishListToggleButton);
  };

  const navigate = useNavigate();

  const productCardClickHandler = () => {
    const route = `/products/${_id}`;
    navigate(route);
  };

  return (
    <li key={_id} className="productsListing_container-card">
      <div className="productsListing_card-imgContainer">
        <img src={images[0]} alt={title} onClick={productCardClickHandler} />
        <span className="product-rating">{rating}</span>
        <span
          onClick={toggleWishListButton}
          className={`${
            wishListToggleButton && "selected"
          } wishListIcon_container flex-center `}
        >
          {wishListToggleButton ? (
            <FavoriteIcon className="wishListIcon selected" />
          ) : (
            <FavoriteBorderIcon className="wishListIcon " />
          )}
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
      </div>
    </li>
  );
};

export default ProductCard;

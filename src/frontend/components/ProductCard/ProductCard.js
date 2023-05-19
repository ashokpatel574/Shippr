import React from "react";

const ProductCard = ({ productItem }) => {
  const { _id, title, images, price, discountpercent, discountprice, rating } =
    productItem;
  return (
    <li key={_id} className="productsListing_container-card">
      <div className="productsListing_card-imgContainer">
        <img src={images[0]} alt={title} />
        <span className="product-rating">{rating}</span>
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

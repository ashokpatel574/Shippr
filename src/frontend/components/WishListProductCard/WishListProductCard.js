import React from "react";

const WishListProductCard = ({ productItem }) => {
  const { _id, title, images, price, discountpercent, discountprice, rating } =
    productItem;

  return (
    <li key={_id} className=" wishListpage_productList-card">
      <div className="productsListing_card-imgContainer wishListpage_productList_card-imgContainer">
        <img src={images[0]} alt={title} />
        <span className="product-rating">{rating}</span>
        <span className="remove-card">X</span>
      </div>
      <div className=" wishListpage_productList_card-textContainer">
        <p className="wishListpage_productList_card-textContainer-title">
          {title}
        </p>
        <p className="wishListpage_productList_card-priceContainer">
          {Number(discountpercent * 100) === 0 ? (
            <>
              <span className="discountPrice">Rs.{discountprice}</span>
            </>
          ) : (
            <>
              <span className="discountPrice">Rs.{discountprice}</span>
              <span className="totalPrice">Rs.{price}</span>

              <span className="discountPercent">
                {`(${discountpercent * 100} OFF%)`}
              </span>
            </>
          )}
        </p>
      </div>
      <div className="wishListpage_productList_card-btnContainer">
        <button className="btn addToCartBtn">Move to cart</button>
      </div>
    </li>
  );
};

export default WishListProductCard;

import React from "react";

import { useData } from "../context/DataContext";
import { useParams } from "react-router";

const SingleProductPage = () => {
  const { state } = useData();
  const { productId } = useParams();

  const singleProductDetails = state?.products?.find(
    (productItem) => productItem._id === productId
  );

  const addToCartBtnHandler = (id) => {};

  const addToWishlistBtnHandler = (id) => {};

  if (singleProductDetails) {
    const {
      _id,
      title,
      images,
      price,
      discountpercent,
      discountprice,
      sizes,
      description,
    } = singleProductDetails;

    return (
      <section className="singleProductpage_section">
        <div className="singleProductpage_main-container">
          <div className="singleProduct_imgContainer">
            <ul>
              {images?.map((imageItem, id) => (
                <li key={id}>
                  <img src={imageItem} alt={"Tshirt"} />
                </li>
              ))}
            </ul>
          </div>
          <div className="singleProduct_detailsContainer">
            <h3 className="singleProduct_title">{title}</h3>

            <div className="singleProduct_priceContainer">
              <span className="discountPrice">Rs. {discountprice}</span>
              <span className="totalPrice">Rs. {price}</span>

              <span className="discountPercent">
                {`(${discountpercent * 100} OFF%)`}
              </span>
            </div>

            <div className="singleProduct_sizesContainer">
              <h3>Size</h3>
              <ul>
                {sizes?.map((sizeListItem, id) => (
                  <li key={id} className="singleProduct_sizes">
                    <label htmlFor="sizefilter">
                      <input id="sizefilter" type="radio" name="sizefilter" />
                      <span className="size_text"> {sizeListItem}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="singleProduct_btnContainer">
              <button
                onClick={() => addToCartBtnHandler(_id)}
                className="btn addToCartBtn"
              >
                Add to cart
              </button>
              <button
                onClick={() => addToWishlistBtnHandler(_id)}
                className="btn addToWishListBtn"
              >
                WishList
              </button>
            </div>

            <div className="singleProduct_details">
              <h3 className="singleProduct_details-title">Product Detail</h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default SingleProductPage;

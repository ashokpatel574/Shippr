import React from "react";

import { useData } from "../context/DataContext";
import { useParams, useNavigate, useLocation } from "react-router";
import { isProductInCart, isProductInWishlist } from "../utils/utils";
import {
  DeleteWishListItem,
  PostWishListItem,
  PostCartItem,
} from "../utils/apiUtils";
import { ToastHandler } from "../utils/utils";
import { ToastType } from "../constant";
import { useAuth } from "../context/AuthContext";

const SingleProductPage = () => {
  const { state, dispatch } = useData();
  const { token } = useAuth();
  const { productId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const singleProductDetails = state?.products?.find(
    (productItem) => productItem._id === productId
  );

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

    const inWishList = isProductInWishlist(state.wishlist, _id);
    const inCartList = isProductInCart(state.cartlist, _id);

    const addToWishlistBtnHandler = (productId) => {
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
              product: singleProductDetails,
              encodedToken: token,
              dispatch: dispatch,
            });

        inWishList
          ? ToastHandler(ToastType.Warn, "Removed from wishlist")
          : ToastHandler(ToastType.Success, "Added to wishlist");
      }
    };

    const addToCartBtnHandler = (product) => {
      inCartList
        ? navigate(`/cart`)
        : PostCartItem({
            product: product,
            encodedToken: token,
            dispatch: dispatch,
          });

      !inCartList && ToastHandler(ToastType.Success, "Added to cart");
    };

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
                onClick={() => addToCartBtnHandler(singleProductDetails)}
                className="btn addToCartBtn"
              >
                {inCartList ? "Go to Cart" : "Add to cart"}
              </button>
              <button
                onClick={() => addToWishlistBtnHandler(_id)}
                className="btn addToWishListBtn"
              >
                {inWishList ? `Remove from Wishlist` : `Add to Wishlist`}
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

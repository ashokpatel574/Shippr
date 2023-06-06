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
import Loader from "../components/loader/Loader";

const SingleProductPage = () => {
  const {
    state: { wishlist, cartlist, products },
    dispatch,
    setIsLoading,
  } = useData();
  const { token } = useAuth();
  const { productId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const singleProductDetails = products?.find(
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
      description,
    } = singleProductDetails;

    const inWishList = isProductInWishlist(wishlist, _id);
    const inCartList = isProductInCart(cartlist, _id);

    const addToWishlistBtnHandler = (productId) => {
      if (!token) {
        navigate("/login", { state: { from: location } });
      } else {
        inWishList
          ? DeleteWishListItem(
              {
                productId: productId,
                encodedToken: token,
                dispatch: dispatch,
              },
              setIsLoading
            )
          : PostWishListItem(
              {
                product: singleProductDetails,
                encodedToken: token,
                dispatch: dispatch,
              },
              setIsLoading
            );

        inWishList
          ? ToastHandler(ToastType.Warn, "Removed from wishlist")
          : ToastHandler(ToastType.Success, "Added to wishlist");
      }
    };

    const addToCartBtnHandler = (product) => {
      inCartList
        ? navigate(`/cart`)
        : PostCartItem(
            {
              product: product,
              encodedToken: token,
              dispatch: dispatch,
            },
            setIsLoading
          );

      !inCartList && ToastHandler(ToastType.Success, "Added to cart");
    };

    return (
      <section className="singleProductpage_section section-padding">
        <article className="singleProductpage_main-container page-containerWidth gap-s section-padding">
          <div className="singleProduct_imgContainer">
            <ul className=" flex-wrap gap-s">
              {images?.map((imageItem, id) => (
                <li key={id}>
                  <img src={imageItem} alt={"Tshirt"} />
                </li>
              ))}
            </ul>
          </div>
          <div className="singleProduct_detailsContainer">
            <h3 className="singleProduct_title">{title}</h3>

            <div className="singleProduct_priceContainer flex-justify-start gap-m padding-tp-btm-l">
              <span className="discountPrice">₹ {discountprice}</span>
              {discountpercent > 0 ? (
                <>
                  <span className="totalPrice txt-crossed-off">₹ {price}</span>
                  <span className="discountPercent">
                    {`(${discountpercent * 100} OFF%)`}
                  </span>
                </>
              ) : (
                <></>
              )}
            </div>

            {/* <div className="singleProduct_sizesContainer">
            <h3>Sizes</h3>
            <ul className="flex-justify-start gap-m">
              {sizes?.map((sizeListItem, id) => (
                <li key={id} className="singleProduct_sizes">
                  <label htmlFor="sizefilter">
                    <input id="sizefilter" type="radio" name="sizefilter" />
                    <span className="size_text"> {sizeListItem}</span>
                  </label>
                </li>
              ))}
            </ul>
            <span className="size-error">Size is required!</span>
          </div> */}

            <div className="singleProduct_btnContainer flex-justify-start flex-wrap gap-l">
              <button
                onClick={() => addToCartBtnHandler(singleProductDetails)}
                className={`btn addToCartBtn ${inCartList && "toCartAction"}`}
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
        </article>
      </section>
    );
  } else {
    <></>;
  }
};

export default SingleProductPage;

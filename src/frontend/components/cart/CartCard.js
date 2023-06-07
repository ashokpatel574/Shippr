import { useNavigate, useLocation } from "react-router";
// Components
import CartFilter from "./CartFilter";
// Context
import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";
// Utils
import {
  PostWishListItem,
  DeleteWishListItem,
  DeleteCartItem,
} from "../../utils/apiUtils";
import { ToastHandler, isProductInWishlist } from "../../utils/utils";
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
    setIsLoading,
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
        ? DeleteWishListItem(
            {
              productId: cartId,
              encodedToken: token,
              dispatch: dispatch,
            },
            setIsLoading
          )
        : PostWishListItem(
            {
              product: cartItem,
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

  const removeCartItemHandler = (cartId) => {
    DeleteCartItem(
      {
        productId: cartId,
        encodedToken: token,
        dispatch: dispatch,
      },
      setIsLoading
    );

    ToastHandler(ToastType.Warn, "Removed from cart");
  };

  return (
    <div className="cartpage_productDetails-card flex-column ">
      <div className="product_info-container flex-space-between gap-m padding-m">
        <div className="product_info-partOne flex-column flex-start gap-m">
          <p className="product_info-partOne-title">{title}</p>
          <div className="cartProduct_priceContainer flex-justify-start">
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
          <p className="savedPrice">
            You saved ₹ {Math.ceil(discountpercent * price)}/-
          </p>

          <div className="cartProduct_filterContainer flex-justify-start gap-xl">
            <CartFilter sizes={sizes} qty={qty} cartId={cartId} />
          </div>
        </div>
        <div className="product_info-partTwo">
          <img src={images[0]} alt={title} />
        </div>
      </div>
      <div className="cartProduct_btnContainer flex-space-evenly padding-tp-btm-s gap-m flex-wrap">
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

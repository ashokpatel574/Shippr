import { useNavigate, useLocation } from "react-router";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
// Context
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";

import { isProductInCart, ToastHandler } from "../../utils/utils";
import { PostCartItem, DeleteWishListItem } from "../../utils/apiUtils";
import { ToastType } from "../../constant";

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
  const {
    state: { cartlist },
    dispatch,
    setIsLoading,
  } = useData();
  const navigate = useNavigate();
  const location = useLocation();

  const wishlistCardClickHandler = () => {
    const route = `/products/${wishlistId}`;
    navigate(route);
  };

  const inCartList = isProductInCart(cartlist, wishlistId);
  const addToCartBtnHandler = (wishlistItem) => {
    inCartList
      ? navigate(`/cart`)
      : PostCartItem(
          {
            product: wishlistItem,
            encodedToken: token,
            dispatch: dispatch,
          },
          setIsLoading
        );

    !inCartList && ToastHandler(ToastType.Success, "Added to cart");
  };

  const removeWishlistHandler = (wishlistId) => {
    if (!token) {
      navigate("/login", { state: { from: location } });
    } else {
      DeleteWishListItem(
        {
          productId: wishlistId,
          encodedToken: token,
          dispatch: dispatch,
        },
        setIsLoading
      );

      ToastHandler(ToastType.Warn, "Removed from wishlist");
    }
  };

  return (
    <li
      key={title}
      className="wishList_card-container flex-column padding-s gap-m"
    >
      <div className="wishlist_card-imgContainer fillContainer">
        <img src={images[0]} alt={title} onClick={wishlistCardClickHandler} />
        <span className="product-rating flex-center">
          <span> {rating}</span>
          <StarIcon />
        </span>
        <span
          onClick={() => removeWishlistHandler(wishlistId)}
          className="wishListIcon_container remove-card  flex-center"
        >
          <CloseIcon className="closeIcon" />
        </span>
      </div>
      <div className="wishListpage_productList_card-textContainer flex-column flex-start gap-s">
        <p className="text-ellipsis">{title}</p>
        <p className="wishListpage_productList_card-priceContainer flex-center gap-s">
          <span className="discountPrice">₹ {discountprice}</span>
          {discountpercent > 0 ? (
            <>
              <span className="totalPrice txt-crossed-off">₹ {price}</span>
              <span className="discountPercent">
                {`(${discountpercent * 100} off%)`}
              </span>
            </>
          ) : (
            <></>
          )}
        </p>

        <button
          onClick={() => addToCartBtnHandler(wishlistItem)}
          className={`btn addToCartBtn ${inCartList && "toCartAction"}`}
        >
          {inCartList ? "Go to Cart" : "Add to cart"}
        </button>
      </div>
    </li>
  );
};

export default WishListCard;

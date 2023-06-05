import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useData } from "../../context/DataContext";
import { DeleteCartItem, UpdateCartItemQty } from "../../utils/apiUtils";
import { ToastHandler } from "../../utils/utils";
import { ToastType } from "../../constant";
import { useAuth } from "../../context/AuthContext";

const CartFilter = ({ sizes, qty, cartId }) => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const { token } = useAuth();
  const { dispatch } = useData();

  const updateCartQty = (type, productId, qty) => {
    if (qty >= 1) {
      setBtnDisabled(false);
    }

    if (type === "Decrement") {
      if (qty === 1) {
        DeleteCartItem({
          productId: productId,
          encodedToken: token,
          dispatch: dispatch,
        });
        ToastHandler(ToastType.Warn, "Removed from cart");
        setBtnDisabled(true);
      }
    }

    UpdateCartItemQty({
      productId: productId,
      encodedToken: token,
      type: type,
      dispatch: dispatch,
    });
  };

  return (
    <>
      <div className="cartProduct_sizeFilter">
        <label htmlFor="selectSize"></label>
        <select id="selectSize">
          <option disabled={true}>Select Size</option>
          {sizes?.map((sizeItem, id) => (
            <option key={id} value={sizeItem}>
              Size: {"  "} {sizeItem.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <div className="cartProduct_qtyFilter flex-align-center gap-s">
        <p className="qtyFilter-title">Quantity:</p>
        <button
          onClick={() => updateCartQty(`Decrement`, cartId, qty)}
          disabled={qty === 1 && btnDisabled}
          className="qtyDecrease flex-center"
        >
          <RemoveCircleIcon />
        </button>
        <span className="productQty">{qty}</span>
        <button
          onClick={() => updateCartQty(`Increment`, cartId, qty)}
          className="qtyIncrease flex-center"
        >
          <AddCircleIcon />
        </button>
      </div>
    </>
  );
};

export default CartFilter;

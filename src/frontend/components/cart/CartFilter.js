import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useData } from "../../context/DataContext";

const CartFilter = ({ sizes }) => {
  const [qty, setqty] = useState(1);

  const { state } = useData();

  return (
    <>
      <div className="cartProduct_sizeFilter">
        <label htmlFor="selectSize"></label>
        <select id="selectSize">
          <option disabled={true}>Select Size</option>
          {sizes.map((sizeItem, id) => (
            <option key={id} value={sizeItem}>
              Size: {"  "} {sizeItem.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <div className="cartProduct_qtyFilter">
        <p classname="qtyFilter-title">Quantity:</p>
        <button
          onClick={() => setqty((prev) => prev - 1)}
          disabled={qty === 1}
          className="qtyIncrease"
        >
          <RemoveCircleIcon />
        </button>
        <span className="productQty">{qty}</span>
        <button
          onClick={() => setqty((prev) => prev + 1)}
          className="qtyDecrease"
        >
          <AddCircleIcon />
        </button>
      </div>
    </>
  );
};

export default CartFilter;

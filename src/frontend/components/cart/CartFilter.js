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
          <option value={"s"}>Size: S</option>
          {sizes.map((sizeItem, id) => (
            <option key={id} value={sizeItem}>
              {sizeItem}
            </option>
          ))}
        </select>
      </div>
      <div className="cartProduct_qtyFilter">
        <label htmlFor="qtySize">Quantity</label>
        <button onClick={() => setqty((prev) => prev - 1)} disabled={qty === 1}>
          <RemoveCircleIcon />
        </button>
        <span>{qty}</span>
        <button onClick={() => setqty((prev) => prev + 1)}>
          <AddCircleIcon />
        </button>
      </div>
    </>
  );
};

export default CartFilter;

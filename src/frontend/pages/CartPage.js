import React from "react";
import { useData } from "../context/DataContext";
import CartCard from "../components/cart/CartCard";
import CartPriceSummary from "../components/cart/CartPriceSummary";

const CartPage = () => {
  const { state } = useData();

  return (
    <section className="cartpage_section">
      <div className="cartpage_main-container">
        <div className="cartpage_productDetails flex-column">
          <h3 className="cartpage_productDetails-title">
            Total Cart Items : {state.cartlist.length}
          </h3>
          <ul className="cartpage_productDetails-cardList flex-column">
            {state?.cartlist?.map((cartItem, id) => (
              <CartCard cartItem={cartItem} key={id} />
            ))}
          </ul>
        </div>

        <div className="cartpage_priceSummary-container">
          <CartPriceSummary />
        </div>
      </div>
    </section>
  );
};

export default CartPage;

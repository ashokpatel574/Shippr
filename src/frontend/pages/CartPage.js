import React from "react";
import { useData } from "../context/DataContext";
import CartCard from "../components/cart/CartCard";
import CartPriceSummary from "../components/cart/CartPriceSummary";
import EmptyCartImg from "../../assets/cart/emptycart.png";

import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const {
    state: { cartlist },
  } = useData();
  const navigate = useNavigate();

  return (
    <section className="cartpage_section padding-xxl">
      {!cartlist.length && (
        <article className="emptyCart_Container  padding-xl">
          <div className="emptyCart_Img-Container fillContainer">
            <img
              src={EmptyCartImg}
              alt="empty cartlist"
              width="400px"
              height="400px"
            />
          </div>
          <div className="emptyCart_text-Container flex-column flex-center gap-s">
            <h3>Your cart is empty!</h3>
            <p>Go ahead and explore top categories.</p>
            <button
              onClick={() => navigate("/products")}
              className="btn shoppingExploreBtn"
            >
              Start Shopping
            </button>
          </div>
        </article>
      )}
      {cartlist.length > 0 && (
        <section className="cartpage_main-container page-containerWidth gap-xxl">
          <div className="cartpage_productDetails flex-column">
            <h3 className="cartpage_productDetails-title">
              Total Cart Items : 0{cartlist.length}
            </h3>
            <ul className="cartpage_productDetails-cardList flex-column gap-l">
              {cartlist?.map((cartItem, id) => (
                <CartCard cartItem={cartItem} key={id} />
              ))}
            </ul>
          </div>

          <div className="cartpage_priceSummary-container">
            <CartPriceSummary />
          </div>
        </section>
      )}
    </section>
  );
};

export default CartPage;

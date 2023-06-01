import React from "react";
import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const CartPriceSummary = () => {
  const { state } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();
  const cartPriceSummary = state.cartlist.reduce(
    (acc, curr) => {
      return {
        ...acc,
        totalprice: Math.ceil(curr.price + acc.totalprice),
        totaldiscount: Math.ceil(
          Number(curr.price * curr.discountpercent) + acc.totaldiscount
        ),
        discountprice: curr.discountprice + acc.discountprice,
      };
    },
    {
      totalprice: 0,
      totaldiscount: 0,
      discountprice: 0,
    }
  );

  const { totalprice, totaldiscount, discountprice } = cartPriceSummary;

  return (
    <>
      <h3 className="cartpage_priceSummary-container-title">Price Summary</h3>
      <div className="cartpage_priceSummary-info flex-column flex-start">
        <div className="cartTotal">
          <span>Total MRP</span>
          <span>&#8377; {totalprice}</span>
        </div>
        <div className="cartDiscount">
          <span>Discount Price</span>
          <span>&#8377; {discountprice}</span>
        </div>
        <div className="cartShippingCharges">
          <span>Shipping Charges</span>
          <span>0</span>
        </div>
        <div className="cartDiscountSaved">
          <span>You have saved!</span>
          <span>&#8377; {totaldiscount}</span>
        </div>

        <div className="cartGrandTotal">
          <span>Total Amount</span>
          <span>&#8377; {discountprice}</span>
        </div>

        <div className="cart_placeOrder">
          {token ? (
            <button
              onClick={() => navigate("/checkout")}
              className="btn placeOrderBtn"
            >
              Place Order
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="btn placeOrderBtn"
            >
              Log In to place Order
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPriceSummary;

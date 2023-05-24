import React from "react";
import { useData } from "../../context/DataContext";

const CartPriceSummary = () => {
  const { state } = useData();

  console.log(state.cart);

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

  console.log(cartPriceSummary);

  const { totalprice, totaldiscount, discountprice } = cartPriceSummary;

  const GST = 0.12;

  const Total = Math.ceil(discountprice * 0.12 + discountprice);

  return (
    <>
      <h3>Price Summary</h3>
      <div className="cartpage_priceSummary-info">
        <div className="cartTotal">
          <span>Total MRP</span>
          <span>{totalprice}</span>
        </div>
        <div className="cartDiscount">
          <span>Discount on MRP</span>
          <span>{totaldiscount}</span>
        </div>

        <div className="cartDiscount">
          <span>Discount Price</span>
          <span>{discountprice}</span>
        </div>
        <div className="cartTax">
          <span>GST - 12%</span>
          <span>{Math.ceil(discountprice * GST)}</span>
        </div>
        <div className="cartShippingCharges">
          <span>Shipping Charges</span>
          <span>0</span>
        </div>
        <div className="cartGrandTotal">
          <span>Total Amount</span>
          <span>{Total}</span>
        </div>
        <div className="cart_placeOrder">
          <button className="btn placeOrderBtn">Place Order</button>
        </div>
      </div>
    </>
  );
};

export default CartPriceSummary;

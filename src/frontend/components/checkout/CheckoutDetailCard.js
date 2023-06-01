import React from "react";
import { useData } from "../../context/DataContext";

const CheckoutDetailCard = () => {
  const { state } = useData();

  console.log(state.addressList);
  return (
    <>
      <h3 className="order_detail-title">Order details</h3>
      <div className="order_product-container">
        <div className="order_product-container-part-one flex-space-between">
          <span>Item List</span>
          <span>Qty</span>
        </div>
        <div className="order_product-container-part-two flex-column  ">
          {state.cartlist.map((productItem) => (
            <div className="order_productItem-container flex-column">
              <div className="order_productItem-info flex-space-between">
                <span>{productItem.title}</span>
                <span>Qty</span>
              </div>
              <div className="order_productItem-size flex-space-between">
                <span>size: M</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h3 className="order_detail-title">Price details</h3>
      <div className="order_price-container flex-column">
        <div className="orderTotal_price-container flex-space-between">
          <span>Price (1 Qty)</span>
          <span>Price</span>
        </div>
        <div className="orderDiscount_price-container flex-space-between">
          <span>Discount (1 Qty)</span>
          <span>Price</span>
        </div>
        <div className="orderTotalShipping_price-container flex-space-between">
          <span>Shipping Charges</span>
          <span>0</span>
        </div>
        <div className="orderTotalSaved_price-container flex-space-between">
          <span>You have saved!</span>
          <span>0</span>
        </div>
        <div className="orderTotal_amount-container flex-space-between">
          <span>Total Amount</span>
          <span>Price</span>
        </div>
      </div>
      <h3 className="order_detail-title">Address details</h3>
      {state.addressList.map((addressListItem) => (
        <div
          key={addressListItem.id}
          className="order_address-container flex-column"
        >
          <p className="name"> {addressListItem.name}</p>
          <p>#{addressListItem.address},</p>
          <p>
            {addressListItem.city}-{addressListItem.pincode},
          </p>
          <p>
            {addressListItem.state}, {addressListItem.country}
          </p>
          <p>Mobile Number: {addressListItem.mobile}</p>
        </div>
      ))}

      <button className="btn placeOrderBtn">Place order</button>
    </>
  );
};

export default CheckoutDetailCard;

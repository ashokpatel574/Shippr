import React from "react";
import { useData } from "../../context/DataContext";
import { ToastHandler } from "../../utils/utils";
import { ToastType } from "../../constant";

const CheckoutDetailCard = () => {
  const {
    state: { cartlist, checkoutAddress },
    cartPriceSummary,
  } = useData();

  const { totalprice, totaldiscount, discountprice } = cartPriceSummary;

  const totalQty = cartlist.reduce((acc, curr) => acc + curr.qty, 0);

  const checkoutOrderHandler = () => {
    if (!checkoutAddress) {
      ToastHandler(ToastType.Warn, "Please add address");
    } else {
      ToastHandler(ToastType.Success, "Order placed");
    }
  };

  return (
    <>
      <h3 className="order_detail-title">Order details</h3>
      <div className="order_product-container">
        <div className="order_product-container-part-one flex-space-between">
          <span>Item List</span>
          <span>Qty</span>
        </div>
        <div className="order_product-container-part-two flex-column  ">
          {cartlist.map((productItem) => (
            <div
              key={productItem._id}
              className="order_productItem-container flex-column"
            >
              <div className="order_productItem-info flex-space-between">
                <span>{productItem.title}</span>
                <span>{productItem.qty}</span>
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
          <span>Price ({totalQty} Qty)</span>
          <span>{totalprice}</span>
        </div>
        <div className="orderDiscount_price-container flex-space-between">
          <span>Discount </span>
          <span>-{discountprice}</span>
        </div>
        <div className="orderTotalShipping_price-container flex-space-between">
          <span>Shipping Charges</span>
          <span>0</span>
        </div>
        <div className="orderTotalSaved_price-container flex-space-between">
          <span>You have saved!</span>
          <span>{totaldiscount}</span>
        </div>
        <div className="orderTotal_amount-container flex-space-between">
          <span>Total Amount</span>
          <span>{discountprice}</span>
        </div>
      </div>

      {checkoutAddress && (
        <>
          <h3 className="order_detail-title">Delivery address</h3>
          <div
            key={checkoutAddress.id}
            className="order_address-container flex-column"
          >
            <p className="name"> {checkoutAddress.name}</p>
            <p>#{checkoutAddress.address},</p>
            <p>
              {checkoutAddress.city}-{checkoutAddress.pincode},
            </p>
            <p>
              {checkoutAddress.state}, {checkoutAddress.country}
            </p>
            <p>Mobile Number: {checkoutAddress.mobile}</p>
          </div>
        </>
      )}

      <button onClick={checkoutOrderHandler} className="btn placeOrderBtn">
        Place order
      </button>
    </>
  );
};

export default CheckoutDetailCard;

import { useNavigate } from "react-router-dom";
// Context
import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";
// Utils
import {
  ToastHandler,
  getCurrentDate,
  getDeliveryDate,
} from "../../utils/utils";
import { ToastType, ActionType } from "../../constant";
import { DeleteCartItem } from "../../utils/apiUtils";
import Logo from "../../../assets/logo/shipprLogoBird.png";

const CheckoutDetailCard = () => {
  const {
    state: { cartlist, checkoutAddress },
    cartPriceSummary,
    dispatch,
    setIsLoading,
  } = useData();
  const { currentUser, token } = useAuth();
  const navigate = useNavigate();

  const { totalprice, totaldiscount, discountprice } = cartPriceSummary;
  const totalQty = cartlist.reduce((acc, curr) => acc + curr.qty, 0);

  const handlePaymentSuccess = (response) => {
    const orderDetail = [
      {
        id: response.razorpay_payment_id,
        productList: [...cartlist],
        address: checkoutAddress,
        amount: discountprice,
        date: getCurrentDate(),
        deliveryDate: getDeliveryDate(),
      },
    ];

    setIsLoading(true);
    dispatch({
      type: ActionType.SetOrderList,
      payload: { order: orderDetail },
    });
    ToastHandler(ToastType.Success, "Order placed");
    dispatch({ type: ActionType.ClearCart });
    dispatch({ type: ActionType.ClearFilter });

    cartlist?.forEach((element) => {
      DeleteCartItem(
        { productId: element._id, encodedToken: token, dispatch: dispatch },
        setIsLoading
      );
    });

    console.log(cartlist);
    navigate("/profile/userOrder");
  };

  const razorpayOptions = {
    key: process.env.REACT_APP_PAYMENT_TEST_KEY_SECRET,
    amount: discountprice * 100,
    name: "Shippr",
    description: "Thank You For Ordering",
    image: { Logo },
    handler: (response) => handlePaymentSuccess(response),
    prefill: {
      name: currentUser?.firstName,
      email: currentUser?.email,
      contact: checkoutAddress?.mobile,
    },
    notes: {
      address: checkoutAddress,
    },
    theme: {
      color: "#3c0ac2",
    },
  };

  const checkoutOrderHandler = () => {
    if (!checkoutAddress) {
      ToastHandler(ToastType.Warn, "Please add address");
    } else {
      const razorpayInstance = new window.Razorpay(razorpayOptions);
      razorpayInstance.open();
    }
  };

  return (
    <>
      <h3 className="order_detail-title padding-tp-btm-xs">Order details</h3>
      <div className="order_detail-container">
        <div className="order_detail-container-part-one flex-space-between">
          <span>Item List</span>
          <span>Qty</span>
        </div>
        <ul className="order_detail-container-part-two flex-column gap-s  padding-tp-btm-s  ">
          {cartlist?.map((productItem) => (
            <li
              key={productItem._id}
              className="order_details-list flex-column"
            >
              <div className="order_details-info flex-space-between">
                <span>{productItem.title}</span>
                <span>0{productItem.qty}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <h3 className="order_detail-title padding-tp-btm-xs">Price details</h3>
      <div className="order_price-container flex-column gap-s">
        <div className="orderTotal_price-container flex-space-between">
          <span>Price ({totalQty} Qty)</span>
          <span>₹ {totalprice}</span>
        </div>
        <div className="orderDiscount_price-container flex-space-between">
          <span>Discount </span>
          <span> ₹ {discountprice}</span>
        </div>
        <div className="orderTotalShipping_price-container flex-space-between">
          <span>Shipping Charges</span>
          <span>0</span>
        </div>
        <div className="orderTotalSaved_price-container flex-space-between">
          <span>You have saved!</span>
          <span>₹ {totaldiscount}</span>
        </div>
        <div className="orderTotal_amount-container flex-space-between">
          <span>Total Amount</span>
          <span>₹ {discountprice}</span>
        </div>
      </div>

      {checkoutAddress && (
        <>
          <h3 className="order_detail-title padding-tp-btm-xs">
            Delivery address
          </h3>
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

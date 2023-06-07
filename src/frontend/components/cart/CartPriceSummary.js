import { useNavigate } from "react-router-dom";
// Context
import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";

const CartPriceSummary = () => {
  const { cartPriceSummary } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();
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
          <span>- &#8377; {discountprice}</span>
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

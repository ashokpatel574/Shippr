import React from "react";
import { products } from "../../backend/db/products";

const CartPage = () => {
  const { title, images, price, discountpercent, discountprice, sizes } =
    products[0];
  return (
    <section className="cartpage_section">
      <div className="cartpage_main-container">
        <div className="cartpage_productDetails">
          <h3 className="cartpage_productDetails-title">
            Total Cart Items : 05
          </h3>
          <div className="cartpage_productDetails-cardList">
            <div className="cartpage_productDetails-card">
              <div className="product_info-container">
                <div className="product_info-partOne">
                  <p className="product_info-partOne-title">{title}</p>
                  <div className="cartProduct_priceContainer">
                    <span className="discountPrice">Rs. {discountprice}</span>
                    <span className="totalPrice">Rs. {price}</span>

                    <span className="discountPercent">
                      {`(${discountpercent * 100} OFF%)`}
                    </span>
                  </div>
                  <p className="savedPrice">
                    You saved Rs. {Math.ceil(discountpercent * price)} !
                  </p>

                  <div className="cartProduct_filterContainer">
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
                      <label htmlFor="qtySize"></label>
                      <select id="qtySize">
                        <option value="1">Qty: 1</option>
                        {[1, 2, 3, 4, 5, 6].map((item, id) => (
                          <option key={id} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="product_info-partTwo">
                  <img src={images[0]} alt={title} />
                </div>
              </div>
              <div className="cartProduct_btnContainer">
                <span>
                  <button className="btn removeCartBtn">
                    Remove from cart
                  </button>
                </span>
                <span>
                  <button className="btn addToWishListBtn">
                    Add to wishlist
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="cartpage_priceSummary-container">
          <h3>Price Summary</h3>
          <div className="cartpage_priceSummary-info">
            <div className="cartTotal">
              <span>Total MRP</span>
              <span>5000</span>
            </div>
            <div className="cartDiscount">
              <span>Discount on MRP</span>
              <span>5000</span>
            </div>
            <div className="cartTax">
              <span>GST</span>
              <span>5000</span>
            </div>
            <div className="cartShippingCharges">
              <span>Shipping Charges</span>
              <span>0</span>
            </div>
            <div className="cartGrandTotal">
              <span>Total Amount</span>
              <span>5000</span>
            </div>
            <div className="cart_placeOrder">
              <button className="btn placeOrderBtn">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;

import React, { useEffect } from "react";
import { useData } from "../../context/DataContext";
import Loader from "../loader/Loader";

const UserOrder = () => {
  const {
    state: { orderlist },
    isLoading,
    setIsLoading,
  } = useData();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <article className="userOrder_container flex-column ">
          <h3 className="userOrder_container-heading">Order Details</h3>

          {orderlist.length > 0 ? (
            <ul className="userOrderList_container flex-column gap-l flex-start">
              {orderlist.map((orderItem) => {
                const { id, address, amount, date, deliveryDate, productList } =
                  orderItem;
                return (
                  <li
                    key={id}
                    className="userOrderListItem_container padding-m "
                  >
                    <div className="userOrderListItem_container-part-one flex-column flex-start gap-s ">
                      <div className="userOrder_order-summary flex-column gap-xs">
                        <p>
                          <span>Order Id:</span> {id}
                        </p>
                        <p>
                          <span>Total Amount:</span> ₹ {amount} /-
                        </p>
                        <p>
                          <span>Order placed on:</span> {date}
                        </p>
                        <p>
                          <span>Order delivery date:</span> {deliveryDate}
                        </p>
                      </div>
                      <div className="userOrder_address-summary">
                        <p className="name">
                          <span>Name:</span> {address.name}
                        </p>
                        <p>
                          #{address.address}, {address.city},
                        </p>
                        <p>
                          {address.state}-{address.pincode}, {address.country}
                        </p>
                        <p>Mobile Number: {address.mobile}</p>
                      </div>
                    </div>

                    <div className="userOrderListItem_container-part-two flex-column gap-s ">
                      {productList.map((productItem) => {
                        const { title, images, discountprice, qty } =
                          productItem;
                        return (
                          <div
                            key={title}
                            className="userOrder_order-productList flex-start gap-l padding-tp-btm-m "
                          >
                            <div className="product_info-partone">
                              <img src={images[0]} alt={title} />
                            </div>

                            <div className="product_info-partTwo flex-column gap-m ">
                              <h3>Product Details</h3>
                              <p className="product_info-partOne-title">
                                {title}
                              </p>
                              <p className="discountPrice">
                                <span>Price: </span>₹ {discountprice} /-
                              </p>
                              <p className="discountPrice">
                                <span>Qty:</span> 0{qty}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>No order placed yet!</p>
          )}
        </article>
      )}
    </>
  );
};

export default UserOrder;

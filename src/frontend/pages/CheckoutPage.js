import React from "react";
import CheckoutAddressCard from "../components/checkout/CheckoutAddressCard";
import CheckoutDetailCard from "../components/checkout/CheckoutDetailCard";
import { useData } from "../context/DataContext";

const CheckoutPage = () => {
  const { state } = useData();

  return (
    <article className="checkoutpage">
      <section className="checkout_section flex-space-between">
        <div className="checkout_address-container flex-column">
          <h3>Address Information</h3>
          <ul className="flex-column">
            {state.addressList.map((addressListItem) => (
              <CheckoutAddressCard
                key={addressListItem.id}
                addressListItem={addressListItem}
              />
            ))}
          </ul>
          <div className="checkout_add-address-container">
            <button className="btn addAddressbtn">Add new address</button>
          </div>
        </div>
        <div className="checkout-productDetails-container flex-column">
          <CheckoutDetailCard />
        </div>
      </section>
    </article>
  );
};

export default CheckoutPage;

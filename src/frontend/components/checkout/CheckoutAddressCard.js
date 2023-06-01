import React from "react";

const CheckoutAddressCard = ({ addressListItem }) => {
  const { name, address, city, state, country, pincode, mobile } =
    addressListItem;

  return (
    <li className="checkout_Address-card-container">
      <div className="checkout_Address-card-part-one flex-start ">
        <label htmlFor="addresradio">
          <input type="radio" id="addressradio" className="addressradio" />
        </label>

        <p className="name">{name}</p>
      </div>

      <div className="checkout_Address-card-part-two flex-column">
        <p>
          #{address}, {city},
        </p>
        <p>
          {state}-{pincode}, {country}
        </p>
        <p>Mobile Number: {mobile}</p>
      </div>
    </li>
  );
};

export default CheckoutAddressCard;

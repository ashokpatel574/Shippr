import React from "react";

const AddressCard = ({ addressListItem, modalOpen, setModalOpen }) => {
  const { address, city, countryState, pincode, country, name, mobile } =
    addressListItem;

  return (
    <>
      <li className={`userAddress_card-container ${modalOpen && "selected"}`}>
        <div className="userAddress-details">
          <p className="name">{name}</p>
          <p className="address">{address}</p>
          <p className="city">{city}</p>
          <p>
            {countryState} - {pincode}
          </p>
          <p>{country}</p>
          <p>{mobile}</p>
        </div>
        <div className="userAddress_cardBtn-container">
          <button className="btn editBtn">Edit</button>
          <button className="btn removeBtn">Remove</button>
        </div>
      </li>
    </>
  );
};

export default AddressCard;

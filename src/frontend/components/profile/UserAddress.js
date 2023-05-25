import React from "react";
import { useData } from "../../context/DataContext";
import AddressCard from "./AddressCard";

const UserAddress = () => {
  const { state } = useData();

  return (
    <div className="userAddress_container">
      <p className="userAddress_container-heading">Address Details</p>

      <ul className="userAddressList_container">
        {state?.addressList?.map((addressListItem, id) => (
          <AddressCard key={id} addressListItem={addressListItem} />
        ))}
      </ul>

      <p className="addNewAddressBtn"> + Add New Address</p>
    </div>
  );
};

export default UserAddress;

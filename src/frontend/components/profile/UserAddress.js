import React, { useState } from "react";
import { useData } from "../../context/DataContext";
import AddressCard from "./AddressCard";
import AddressModal from "./AddressModal";

const UserAddress = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { state } = useData();

  return (
    <>
      <div className={`userAddress_container ${modalOpen && "selected"}`}>
        <p className="userAddress_container-heading">Address Details</p>

        <ul className="userAddressList_container">
          {state?.addressList?.map((addressListItem, id) => (
            <AddressCard
              key={id}
              addressListItem={addressListItem}
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
            />
          ))}
        </ul>

        <p
          onClick={() => setModalOpen(!modalOpen)}
          className="addNewAddressBtn"
        >
          + Add New Address
        </p>

        <AddressModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </div>
    </>
  );
};

export default UserAddress;

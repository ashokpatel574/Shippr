import { useState } from "react";

import { useData } from "../../context/DataContext";
import AddressCard from "./AddressCard";
import AddressModal from "./AddressModal";

const UserAddress = () => {
  const [modalToggle, setModalToggle] = useState(false);
  const { state } = useData();

  return (
    <div className="userAddress_container">
      <p className="userAddress_container-heading">Address Details</p>
      <ul className="userAddressList_container flex-start flex-column">
        {state?.addressList?.map((addressListItem, id) => (
          <AddressCard
            key={id}
            addressListItem={addressListItem}
            modalState={(modalToggle, setModalToggle)}
          />
        ))}
      </ul>
      <span
        className="addNewAddressBtn"
        onClick={() => setModalToggle(!modalToggle)}
      >
        + Add New Address
      </span>

      {modalToggle && (
        <AddressModal modalState={{ modalToggle, setModalToggle }} />
      )}
    </div>
  );
};

export default UserAddress;

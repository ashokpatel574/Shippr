import { useState } from "react";

import { useData } from "../../context/DataContext";
import AddressCard from "./AddressCard";
import AddressModal from "./AddressModal";
import { ActionType } from "../../constant";

const UserAddress = () => {
  const [modalToggle, setModalToggle] = useState(false);
  const [addressDetails, setAddressDetails] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    mobile: "",
  });

  const { state, dispatch } = useData();

  const editAddresshandler = (selectAddress) => {
    const { id, address, city, state, pincode, country, name, mobile } =
      selectAddress;

    console.log(selectAddress);
    setAddressDetails((prevState) => {
      return {
        ...prevState,
        id: selectAddress.id,
        name: name,
        address: address,
        city: city,
        state: state,
        pincode: pincode,
        mobile: mobile,
        country: country,
      };
    });
    setModalToggle(!modalToggle);
  };

  const removeAddresshandler = (selectAddress) => {
    dispatch({
      type: ActionType.DeleteAddress,
      payload: { address: selectAddress },
    });
  };

  return (
    <div className="userAddress_container">
      <p className="userAddress_container-heading">Address Details</p>
      <ul className="userAddressList_container flex-start flex-column">
        {state?.addressList?.map((addressListItem, id) => (
          <AddressCard
            key={id}
            addressCardprops={{
              addressListItem,
              editAddresshandler,
              removeAddresshandler,
            }}
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
        <AddressModal
          modalState={{ modalToggle, setModalToggle }}
          addressState={{ addressDetails, setAddressDetails }}
        />
      )}
    </div>
  );
};

export default UserAddress;

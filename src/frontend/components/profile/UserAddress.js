import { useData } from "../../context/DataContext";
import AddressCard from "./AddressCard";
import AddressModal from "./AddressModal";
import { ActionType } from "../../constant";

const UserAddress = () => {
  const {
    state,
    dispatch,
    isAddressModalOpen,
    setIsAddressModalOpen,
    setAddressDetails,
  } = useData();

  const editAddresshandler = (selectAddress) => {
    const { id, address, city, state, pincode, country, name, mobile } =
      selectAddress;

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
    setIsAddressModalOpen(!isAddressModalOpen);
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
        onClick={() => setIsAddressModalOpen(!isAddressModalOpen)}
      >
        + Add New Address
      </span>

      {isAddressModalOpen && <AddressModal />}
    </div>
  );
};

export default UserAddress;

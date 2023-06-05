import { useData } from "../../context/DataContext";
import AddressCard from "./AddressCard";
import AddressModal from "./AddressModal";

const UserAddress = () => {
  const {
    state: { addressList },
    isAddressModalOpen,
    setIsAddressModalOpen,
  } = useData();

  return (
    <div className="userAddress_container gap-m padding-tp-btm-m">
      <p className="userAddress_container-heading">Address Details</p>
      <ul className="userAddressList_container flex-start flex-column gap-s padding-tp-btm-m">
        {addressList.length > 0 ? (
          addressList?.map((addressListItem, id) => (
            <AddressCard
              key={id}
              addressCardprops={{
                addressListItem,
              }}
            />
          ))
        ) : (
          <p>No Address added!</p>
        )}
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

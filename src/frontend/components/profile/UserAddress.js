import { useData } from "../../context/DataContext";
import AddressCard from "./AddressCard";
import AddressModal from "./AddressModal";
import { ActionType } from "../../constant";

const UserAddress = () => {
  const { state, isAddressModalOpen, setIsAddressModalOpen } = useData();

  return (
    <div className="userAddress_container">
      <p className="userAddress_container-heading">Address Details</p>
      <ul className="userAddressList_container flex-start flex-column">
        {state?.addressList?.map((addressListItem, id) => (
          <AddressCard
            key={id}
            addressCardprops={{
              addressListItem,
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

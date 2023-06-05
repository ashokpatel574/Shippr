import SmartphoneIcon from "@mui/icons-material/Smartphone";
import { useData } from "../../context/DataContext";
import { ActionType } from "../../constant";

const AddressCard = ({ addressCardprops }) => {
  const { addressListItem } = addressCardprops;
  const { address, city, state, pincode, country, name, mobile } =
    addressListItem;

  const {
    dispatch,
    isAddressModalOpen,
    setIsAddressModalOpen,
    setAddressDetails,
  } = useData();

  const editAddressHandler = (selectAddress) => {
    setIsAddressModalOpen(!isAddressModalOpen);
    setAddressDetails((prevState) => {
      return {
        ...prevState,
        ...selectAddress,
      };
    });
  };

  const removeAddressHandler = (selectAddress) => {
    dispatch({
      type: ActionType.DeleteAddress,
      payload: { address: selectAddress },
    });
  };

  return (
    <>
      <li className="userAddress_card-container flex-start flex-column gap-l ">
        <div className="userAddress-details flex-start flex-column gap-xs ">
          <p className="name">{name}</p>
          <p className="address">#{address}</p>
          <p className="city">{city}</p>
          <p>
            {state} - {pincode}
          </p>
          <p>{country}</p>
          <p className="mobileNumber flex-center">
            <SmartphoneIcon /> {"  "} {mobile}
          </p>
        </div>
        <div className="userAddress_cardBtn-container flex-start gap-l">
          <button
            onClick={() => editAddressHandler(addressListItem)}
            className="btn editBtn"
          >
            Edit
          </button>
          <button
            onClick={() => removeAddressHandler(addressListItem)}
            className="btn removeBtn"
          >
            Remove
          </button>
        </div>
      </li>
    </>
  );
};

export default AddressCard;

import SmartphoneIcon from "@mui/icons-material/Smartphone";

const AddressCard = ({ addressListItem }) => {
  const { address, city, state, pincode, country, name, mobile } =
    addressListItem;

  return (
    <>
      <li className="userAddress_card-container flex-start flex-column">
        <div className="userAddress-details  flex-start flex-column">
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
        <div className="userAddress_cardBtn-container flex-start">
          <button className="btn editBtn">Edit</button>
          <button className="btn removeBtn">Remove</button>
        </div>
      </li>
    </>
  );
};

export default AddressCard;

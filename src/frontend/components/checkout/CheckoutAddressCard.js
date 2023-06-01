import { useState } from "react";
import { ActionType } from "../../constant";
import { useData } from "../../context/DataContext";

const CheckoutAddressCard = ({ addressListItem }) => {
  const [addressSelected, setAddressSelected] = useState("");
  const { id, name, address, city, state, country, pincode, mobile } =
    addressListItem;
  const {
    state: { checkoutAddress },
    dispatch,
  } = useData();

  const checkoutAddressHandler = (address) => {
    setAddressSelected(() => address);
    dispatch({
      type: ActionType.Updated_checkoutAddress,
      payload: { checkoutAddress: address },
    });
  };

  return (
    <li
      className={`checkout_Address-card-container ${
        addressSelected.id === checkoutAddress.id && "selected"
      }`}
      onClick={() => checkoutAddressHandler(addressListItem)}
    >
      <div className="checkout_Address-card-part-one flex-start ">
        <label htmlFor="addresradio">
          <input
            type="radio"
            id={id}
            className="addressradio"
            name="addressradio"
            value={id}
            checked={checkoutAddress.id === id}
            onChange={() => checkoutAddressHandler(addressListItem)}
          />
        </label>

        <p className="name">{name}</p>
      </div>

      <div className="checkout_Address-card-part-two flex-column">
        <p>
          #{address}, {city},
        </p>
        <p>
          {state}-{pincode}, {country}
        </p>
        <p>Mobile Number: {mobile}</p>
      </div>
    </li>
  );
};

export default CheckoutAddressCard;

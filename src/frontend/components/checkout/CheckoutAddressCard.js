import { ActionType } from "../../constant";
import { useData } from "../../context/DataContext";

const CheckoutAddressCard = ({ addressListItem }) => {
  const { id, name, address, city, state, country, pincode, mobile } =
    addressListItem;
  const {
    state: { checkoutAddress },
    dispatch,
  } = useData();

  const checkoutAddressHandler = (address) => {
    dispatch({
      type: ActionType.Updated_checkoutAddress,
      payload: { checkoutAddress: address },
    });
  };

  return (
    <li
      className={`checkout_Address-card-container gap-l padding-l ${
        addressListItem?.id === checkoutAddress?.id && "selected"
      }`}
      onClick={() => checkoutAddressHandler(addressListItem)}
    >
      <div className="checkout_Address-card-part-one flex-start gap-m ">
        <label htmlFor="addresradio" className="padding-tp-btm-s">
          <input
            type="radio"
            id={id}
            className="addressradio"
            name="addressradio"
            value={id}
            checked={checkoutAddress?.id === id}
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

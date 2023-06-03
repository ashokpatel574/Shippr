import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  validateOnlyString,
  validateMobileNumber,
  validatePinCode,
} from "../../utils/utils";
import { stateLists } from "../../constant";
import { UpdateUserAddress } from "../../utils/apiUtils";
import { useData } from "../../context/DataContext";
import { RandomAddressList } from "../../constant";

const AddressModal = () => {
  const [addressErrorDetails, setAddressErrorDetails] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    mobile: "",
  });

  const {
    dispatch,
    isAddressModalOpen,
    setIsAddressModalOpen,
    addressDetails,
    setAddressDetails,
  } = useData();

  console.log(addressDetails);

  const addressHandler = (e) => {
    const { name, value } = e.target;
    setAddressDetails((prevState) => ({ ...prevState, [name]: value }));

    if (name === `name` || name === "city") {
      const nameLength = value.length;
      setAddressErrorDetails({ ...addressErrorDetails, [name]: `` });

      if (!validateOnlyString(value)) {
        setAddressErrorDetails({
          ...addressErrorDetails,
          [name]: `${name[0].toUpperCase() + name.slice(1)} should be in text!`,
        });
      }

      if (nameLength < 3) {
        setAddressErrorDetails({
          ...addressErrorDetails,
          [name]: `${
            name[0].toUpperCase() + name.slice(1)
          } should have atleast 3 character!`,
        });
      }
    }

    if (name === "address") {
      if (value !== "") {
        setAddressErrorDetails({
          ...addressErrorDetails,
          [name]: "",
        });
      }
    }

    if (name === "state") {
      if (stateLists.includes(value)) {
        setAddressErrorDetails({
          ...addressErrorDetails,
          [name]: "",
        });
      }
    }

    if (name === `pincode`) {
      const pincodeLength = value.length;
      setAddressErrorDetails({ ...addressErrorDetails, [name]: `` });

      if (!validatePinCode(value)) {
        if (pincodeLength < 7) {
          setAddressErrorDetails({
            ...addressErrorDetails,
            [name]: `Pincode should be atleast 6 digits`,
          });
        }

        setAddressErrorDetails({
          ...addressErrorDetails,
          [name]: `Pincode should be number`,
        });
      }
    }

    if (name === `mobile`) {
      setAddressErrorDetails({ ...addressErrorDetails, [name]: `` });
      const mobileLength = value.length;

      if (!validateMobileNumber(value)) {
        if (mobileLength <= 10 || mobileLength > 10) {
          setAddressErrorDetails({
            ...addressErrorDetails,
            [name]: `Mobile should be atleast 10 digits`,
          });
        }

        if (mobileLength > 10) {
          setAddressErrorDetails({
            ...addressErrorDetails,
            [name]: `Mobile should be atleast 10 digits`,
          });
        }

        setAddressErrorDetails({
          ...addressErrorDetails,
          [name]: `Please enter valid mobile number!`,
        });
      }
    }
  };

  const userAddressHandler = () => {
    let flag = false;
    let newErrorForm = {};
    Object.keys(addressErrorDetails).forEach((key) => {
      newErrorForm[key] = "";
      if (addressDetails[key] === "") {
        newErrorForm[key] = `${
          key[0].toUpperCase() + key.slice(1)
        } is required!`;
        flag = true;
      }
    });

    flag
      ? setAddressErrorDetails(newErrorForm)
      : UpdateUserAddress(dispatch, addressDetails);
    !flag && setIsAddressModalOpen(!isAddressModalOpen);

    !flag &&
      setAddressDetails({
        name: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        mobile: "",
      });
  };

  const modalCloseHandler = () => {
    setIsAddressModalOpen(!isAddressModalOpen);
    setAddressDetails({
      name: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      mobile: "",
    });
  };

  const randomAddressHandler = () => {
    const randomOrder = Math.floor(Math.random() * RandomAddressList.length);
    setAddressDetails(RandomAddressList[randomOrder]);
  };

  return (
    <div
      className={`address_modal-container ${isAddressModalOpen && "active"}`}
    >
      <div className="address_modal">
        <div className="address_modal-heading-container">
          <h3 className="address_modal-heading">Add New Address</h3>
          <CloseIcon
            className="closeIcon-btn"
            onClick={() => setIsAddressModalOpen(!isAddressModalOpen)}
          />
        </div>

        <div className="address_form-container flex-column flex-start">
          <div className="form_container">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              className="name"
              name="name"
              type="text"
              placeholder="Enter name here"
              value={addressDetails.name}
              onChange={addressHandler}
            />
            <span>{addressErrorDetails.name}</span>
          </div>

          <div className="form_container">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              className="address"
              name="address"
              type="text"
              placeholder="Enter address here"
              onChange={addressHandler}
            />
            <span>{addressErrorDetails.address}</span>
          </div>

          <div className="form_container type-2">
            <div className="form_city-container">
              <label htmlFor="city">City</label>
              <input
                id="city"
                className="city"
                name="city"
                type="text"
                placeholder="Enter city here"
                onChange={addressHandler}
              />
              <span>{addressErrorDetails.city}</span>
            </div>

            <div className="form_pincode-container">
              <label htmlFor="pincode">Pincode</label>
              <input
                id="pincode"
                className="pincode"
                name="pincode"
                type="text"
                min="0"
                placeholder="Enter pincode here"
                onChange={addressHandler}
              />
              <span>{addressErrorDetails.pincode}</span>
            </div>
          </div>

          <div className="form_container">
            <label htmlFor="state">State</label>
            <select
              id="state"
              className="state"
              name="state"
              onChange={addressHandler}
            >
              <option disabled={true}>Select the state</option>
              {stateLists?.map((list) => (
                <option key={list} value={list}>
                  {list}
                </option>
              ))}
            </select>
            <span>{addressErrorDetails.state}</span>
          </div>

          <div className="form_container">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              id="mobile"
              className="mobile"
              name="mobile"
              type="tel"
              placeholder="Enter mobile number here"
              onChange={addressHandler}
            />
            <span>{addressErrorDetails.mobile}</span>
          </div>

          <div className="form_btn-container">
            <button onClick={userAddressHandler} className="btn saveBtn">
              Save
            </button>
            <button onClick={modalCloseHandler} className="btn cancelBtn">
              cancel
            </button>
            <button onClick={randomAddressHandler} className="btn fillDummyBtn">
              Fill Dummy Address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressModal;

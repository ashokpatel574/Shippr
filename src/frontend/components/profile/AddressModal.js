import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const AddressModal = ({ modalOpen, setModalOpen }) => {
  return (
    <>
      <div className={`address_modal-container ${modalOpen && "selected"}`}>
        <div className="address_modal-heading-container">
          <h3 className="address_modal-heading">Add New Address</h3>

          <CloseIcon
            className="closeIcon-btn"
            onClick={() => setModalOpen(!modalOpen)}
          />
        </div>
        <form className="address_form-container">
          <div className="form_container">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              className="name"
              type="text"
              placeholder="Enter name here"
            />
            <span>Required</span>
          </div>
          <div className="form_container">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              className="address"
              type="text"
              placeholder="Enter address here"
            />
            <span>Required</span>
          </div>
          <div className="form_container type-2">
            <div className="form_city-container">
              <label htmlFor="city">City</label>
              <input
                id="city"
                className="city"
                type="text"
                placeholder="Enter city here"
              />
              <span>Required</span>
            </div>
            <div className="form_state-container">
              <label htmlFor="state">State</label>
              <input
                id="state"
                className="state"
                type="text"
                placeholder="Enter state here"
              />
              <span>Required</span>
            </div>
          </div>

          <div className="form_container type-2">
            <div className="form_country-container">
              <label htmlFor="country">Country</label>
              <input
                id="country"
                className="country"
                type="text"
                placeholder="Enter country here"
              />
              <span>Required</span>
            </div>
            <div className="form_pincode-container">
              <label htmlFor="pincode">Pincode</label>
              <input
                id="pincode"
                className="pincode"
                type="number"
                placeholder="Enter pincode here"
              />
              <span>Required</span>
            </div>
          </div>

          <div className="form_container">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              id="mobile"
              className="mobile"
              // type="number"
              type="tel"
              placeholder="Enter mobile number here"
            />
            <span>Required</span>
          </div>
          <div className="form_btn-container">
            <button className="btn saveBtn">Save</button>
            <button
              onClick={() => setModalOpen(!modalOpen)}
              className="btn cancelBtn"
            >
              cancel
            </button>
            <button className="btn fillDummyBtn">Fill Dummy Address</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddressModal;

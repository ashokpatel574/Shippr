import CheckoutAddressCard from "../components/checkout/CheckoutAddressCard";
import CheckoutDetailCard from "../components/checkout/CheckoutDetailCard";
import { useData } from "../context/DataContext";
import AddressModal from "../components/profile/AddressModal";

const CheckoutPage = () => {
  const { state, isAddressModalOpen, setIsAddressModalOpen } = useData();

  const checkoutAddressModalHandler = () =>
    setIsAddressModalOpen(!isAddressModalOpen);

  return (
    <article className="checkoutpage">
      <section className="checkout_section flex-space-between">
        <div className="checkout_address-container flex-column">
          <h3>Please select Address</h3>

          {state.addressList.length > 0 ? (
            <ul className="flex-column">
              {state.addressList?.map((addressListItem) => (
                <CheckoutAddressCard
                  key={addressListItem.id}
                  addressListItem={addressListItem}
                />
              ))}
            </ul>
          ) : (
            ""
          )}

          <div className="checkout_add-address-container">
            <button
              onClick={checkoutAddressModalHandler}
              className="btn addAddressbtn"
            >
              Add new address
            </button>
          </div>

          {isAddressModalOpen && <AddressModal />}
        </div>
        <div className="checkout-productDetails-container flex-column">
          <CheckoutDetailCard />
        </div>
      </section>
    </article>
  );
};

export default CheckoutPage;

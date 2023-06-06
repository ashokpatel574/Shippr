import CheckoutAddressCard from "../components/checkout/CheckoutAddressCard";
import CheckoutDetailCard from "../components/checkout/CheckoutDetailCard";
import { useData } from "../context/DataContext";
import AddressModal from "../components/profile/AddressModal";

const CheckoutPage = () => {
  const {
    state: { addressList },
    isAddressModalOpen,
    setIsAddressModalOpen,
  } = useData();

  const checkoutAddressModalHandler = () =>
    setIsAddressModalOpen(!isAddressModalOpen);

  return (
    <section className="checkoutpage fillContainer padding-xxl">
      <article className="checkout_section flex-space-between padding-xxl">
        <div className="checkout_address-container flex-column padding-tp-btm-s gap-l">
          <h3>Please select Address</h3>

          {addressList.length > 0 ? (
            <ul className="flex-column gap-m">
              {addressList?.map((addressListItem) => (
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
        <div className="checkout-productDetails-container flex-column gap-m">
          <CheckoutDetailCard />
        </div>
      </article>
    </section>
  );
};

export default CheckoutPage;

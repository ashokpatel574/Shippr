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
      <article className="checkout_section flex-column  padding-xl">
        <h3 className="checkout_section-title">Please select Address</h3>
        <div className="checkout_section-container flex-space-between  padding-xs  gap-xxl">
          <div className="checkout_address-container flex-column  gap-l">
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
        </div>
      </article>
    </section>
  );
};

export default CheckoutPage;

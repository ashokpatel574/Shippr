import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";
import WishListCard from "../components/wishList/WishListCard";
import EmptyWishList from "../../assets/wishlist/wishlistEmpty.png";

const WishListPage = () => {
  const {
    state: { wishlist },
  } = useData();
  const navigate = useNavigate();

  return (
    <section className="wishListpage_section padding-xxl fillContainer ">
      {!wishlist.length && (
        <article className="emptyWishlist_Container padding-xxl flex-column flex-center ">
          <div className="emptyWishlist_Img-Container fillContainer">
            <img
              src={EmptyWishList}
              alt="empty wishlist"
              width="300px"
              height="300px"
            />
          </div>
          <div className="emptyWishlist_text-Container ">
            <h3>WishList is Empty!</h3>
            <p>Explore more and shortlist some items</p>
            <button
              onClick={() => navigate("/products")}
              className="btn shoppingExploreBtn"
            >
              Start Shopping
            </button>
          </div>
        </article>
      )}
      {wishlist.length > 0 && (
        <section className="wishList_container flex-column ">
          <h3 className="wishListpage_title">
            Total Wishlist Items : {String(wishlist?.length).padStart(2, 0)}
          </h3>

          <ul className="wishListpage_wishlistCart-list  flex-wrap gap-l ">
            {wishlist?.map((wishlistItem, id) => (
              <WishListCard wishlistItem={wishlistItem} key={id} />
            ))}
          </ul>
        </section>
      )}
    </section>
  );
};

export default WishListPage;

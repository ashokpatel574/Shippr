// React router
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

// components
import Header from "./frontend/components/header/Header";
import Footer from "./frontend/components/footer/Footer";
import MockAPI from "./frontend/components/mockApi/MockApi";
import RequireAuth from "./frontend/components/requiresAuth/RequireAuth";
import UserProfile from "./frontend/components/profile/UserProfile";
import UserAddress from "./frontend/components/profile/UserAddress";
import { ToastContainer } from "react-toastify";

//  public pages
import Home from "./frontend/pages/Home";
import ProductListingPage from "./frontend/pages/ProductListingPage";
import SingleProductPage from "./frontend/pages/SingleProductPage";
import CartPage from "./frontend/pages/CartPage";
import LoginPage from "./frontend/pages/LoginPage";
import SignUpPage from "./frontend/pages/SignUpPage";
import ErrorPage from "./frontend/pages/ErrorPage";

// private pages
import WishListPage from "./frontend/pages/WishListPage";
import CheckoutPage from "./frontend/pages/CheckoutPage";
import ProfilePage from "./frontend/pages/ProfilePage";

const App = () => {
  return (
    <main className="shipprApp_container flex-column ">
      <ToastContainer
        position="bottom-right"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        theme="colored"
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <Header />
      <Routes>
        <Route path="/mock-man" element={<MockAPI />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/products/:productId" element={<SingleProductPage />} />
        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <WishListPage />
            </RequireAuth>
          }
        />
        <Route path="/cart" element={<CartPage />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckoutPage />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        >
          <Route index path="userInfo" element={<UserProfile />} />
          <Route path="userAddress" element={<UserAddress />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;

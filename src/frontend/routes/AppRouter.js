import { createBrowserRouter } from "react-router-dom";

// components
import MockAPI from "../components/mockApi/MockApi";
import RequireAuth from "../components/RequiresAuth/RequireAuth";
import App from "../../App";

// context
import DataContextProvider from "../context/DataContext";
import { AuthContextProvider } from "../context/AuthContext";

// public pages
import Home from "../pages/Home";
import ProductListingPage from "../pages/ProductListingPage";
import SingleProductPage from "../pages/SingleProductPage";
import CartPage from "../pages/CartPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import PageNotFound from "../pages/PageNotFound";

// private pages
import WishListPage from "../pages/WishListPage";
import CheckoutPage from "../pages/CheckoutPage";
import ProfilePage from "../pages/ProfilePage";
import UserProfile from "../components/profile/UserProfile";
import UserAddress from "../components/profile/UserAddress";
import UserOrder from "../components/profile/UserOrder";

// React Router version > 6.4
export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthContextProvider>
        <DataContextProvider>
          <App />
        </DataContextProvider>
      </AuthContextProvider>
    ),
    errorElement: <PageNotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <ProductListingPage /> },
      { path: "products/:productId", element: <SingleProductPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signUp", element: <SignUpPage /> },
      {
        path: "wishlist",
        element: (
          <RequireAuth>
            <WishListPage />
          </RequireAuth>
        ),
      },
      {
        path: "checkout",
        element: (
          <RequireAuth>
            <CheckoutPage />
          </RequireAuth>
        ),
      },
      {
        path: "profile",
        element: (
          <RequireAuth>
            <ProfilePage />
          </RequireAuth>
        ),
        children: [
          { index: true, element: <UserProfile /> },
          { path: "userAddress", element: <UserAddress /> },
          { path: "userOrder", element: <UserOrder /> },
        ],
      },
      { path: "*", element: <PageNotFound /> },
    ],
  },
  { path: "/mock-man", element: <MockAPI /> },
]);

// React Router version < 6.4
// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/mock-man" element={<MockAPI />} />
//       <Route path="/" element={<Home />} />
//       <Route path="/products" element={<ProductListingPage />} />
//       <Route path="/products/:productId" element={<SingleProductPage />} />
//       <Route
//         path="/wishlist"
//         element={
//           <RequireAuth>
//             <WishListPage />
//           </RequireAuth>
//         }
//       />
//       <Route path="/cart" element={<CartPage />} />
//       <Route
//         path="/checkout"
//         element={
//           <RequireAuth>
//             <CheckoutPage />
//           </RequireAuth>
//         }
//       />
//       <Route
//         path="/profile"
//         element={
//           <RequireAuth>
//             <ProfilePage />
//           </RequireAuth>
//         }
//       >
//         <Route index path="userInfo" element={<UserProfile />} />
//         <Route path="userAddress" element={<UserAddress />} />
//       </Route>
//       <Route path="/login" element={<LoginPage />} />
//       <Route path="/signUp" element={<SignUpPage />} />

//       <Route path="*" element={<ErrorPage />} />
//     </Routes>
//   );
// };

// React router

// components
import Header from "./frontend/components/Header/Header";
import Footer from "./frontend/components/Footer/Footer";

// pages
import Home from "./frontend/pages/Home";
import { Routes, Route } from "react-router-dom";

import ProductListingPage from "./frontend/pages/ProductListingPage";
import SingleProductPage from "./frontend/pages/SingleProductPage";
import LoginPage from "./frontend/pages/LoginPage";

const App = () => {
  return (
    <main className="shipprApp_container flex-column">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/products/:productId" element={<SingleProductPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;

import "./App.css";

<<<<<<< Updated upstream
function App() {
  return <div></div>;
}
=======
// components
import Header from "./frontend/components/Header";
import Footer from "./frontend/components/Footer";

// pages
import Home from "./frontend/pages/Home";
import { Routes, Route } from "react-router-dom";
import ProductListingPage from "./frontend/pages/ProductListingPage";
import SingleProductPage from "./frontend/pages/SingleProductPage";

const App = () => {
  return (
    <main className="shipprApp_container flex-column">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/products/:productId" element={<SingleProductPage />} />
      </Routes>
      <Footer />
    </main>
  );
};
>>>>>>> Stashed changes

export default App;

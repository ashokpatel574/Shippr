import { Outlet } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

// components
import Header from "./frontend/components/header/Header";
import Footer from "./frontend/components/footer/Footer";
import { ToastContainer } from "react-toastify";

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
      <Outlet />
      <Footer />
    </main>
  );
};

export default App;

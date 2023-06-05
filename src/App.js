import { Outlet } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

// components
import Header from "./frontend/components/header/Header";
import Footer from "./frontend/components/footer/Footer";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Header />
      <main className="shipprApp_container flex-column ">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
        />

        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;

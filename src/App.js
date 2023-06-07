import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

// components
import Header from "./frontend/components/Header/Header";
import Footer from "./frontend/components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Header />
      <main className="shipprApp_container flex-column ">
        <ToastContainer
          position="top-right"
          autoClose={1000}
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

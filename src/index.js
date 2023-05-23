import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { makeServer } from "./server";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./frontend/context/AuthContext";
import DataContextProvider from "./frontend/context/DataContext";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <DataContextProvider>
          <App />
        </DataContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

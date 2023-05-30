import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { makeServer } from "./server";

import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./frontend/routes/AppRouter";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>
);

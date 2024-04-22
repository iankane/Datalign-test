import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AdminApp, { adminLoader } from "./AdminApp";
import CustomerApp, { customerLoader } from "./CustomerApp";
import RootLayout from "./components/RootLayout";
import { NotFoundPage } from "./components/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route
          index
          element={<AdminApp />}
          loader={adminLoader}
          errorElement={<NotFoundPage />}
        />
        <Route
          path="/customer"
          element={<CustomerApp />}
          loader={customerLoader}
        />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

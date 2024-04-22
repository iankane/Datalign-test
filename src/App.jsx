import React from "react";

import AdminApp from "./AdminApp";
import CustomerApp from "./CustomerApp";
import { NotFoundPage } from "./components/NotFoundPage";
import { startMirage } from "./services/exampleServer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  //startup the mirage server
  startMirage();
  const router = createBrowserRouter([
    {
      path: "/",
      Component: { AdminApp },
      errorElement: <NotFoundPage />,
    },
    {
      path: "/customer",
      Component: { CustomerApp },
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

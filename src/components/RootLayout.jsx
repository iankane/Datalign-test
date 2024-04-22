import React from "react";
import { Link, Outlet } from "react-router-dom";
import Spacer from "./Spacer";

const RootLayout = () => {
  return (
    <div>
      <header>
        <h1>Datalign Ad App</h1>
        <Link to="/">Admin Panel</Link>
        <Spacer size={"10px"} />
        <Link to="/customer">Customer</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;

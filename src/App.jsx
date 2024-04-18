import React, { useState } from "react";

import AdminApp from "./AdminApp";
import { startMirage } from "./services/exampleServer";
import CustomerApp from "./CustomerApp";
import Spacer from "./components/Spacer";

function App() {
  //startup the mirage server
  startMirage();
  const space = "10px";
  const [showAdmin, setSnowAdmin] = useState(true);
  const onClickAdmin = () => {
    setSnowAdmin(true);
  };
  const onClickCustomer = () => {
    setSnowAdmin(false);
  };

  return (
    <div>
      <div className="buttonContainer">
        <button
          type="button"
          className={"btn btn-light " + (showAdmin ? "active" : "")}
          onClick={onClickAdmin}
        >
          Administrator View
        </button>
        <button
          type="button"
          className={"btn btn-light " + (showAdmin ? "" : "active")}
          onClick={onClickCustomer}
        >
          Customer View
        </button>
      </div>
      <Spacer size={space} />
      <AdminApp show={showAdmin} />
      <CustomerApp show={!showAdmin} />
    </div>
  );
}

export default App;

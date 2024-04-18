import React, { useState } from "react";

import AdminApp from "./AdminApp";
import ViewButtons from "./components/ViewButtons";
import { startMirage } from "./services/exampleServer";
import { getJSON, postJSON } from "./services/JSONResponseHandler";
import CustomerApp from "./CustomerApp";

function App() {
  //startup the mirage server
  startMirage();
  const [showAdmin, setSnowAdmin] = useState(true);
  const [ad, setAd] = useState([]);
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
      <AdminApp show={showAdmin} />
      <CustomerApp show={!showAdmin} ad={ad} />
    </div>
  );
}

export default App;

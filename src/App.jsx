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
      <Spacer size={space} />
      <AdminApp show={showAdmin} />
      <CustomerApp show={!showAdmin} />
    </div>
  );
}

export default App;

import React from "react";

import AdminApp from "./AdminApp";
import ViewButtons from "./components/ViewButtons";
import { startMirage } from "./services/exampleServer";
import { getJSON, postJSON } from "./services/JSONResponseHandler";
import CustomerApp from "./CustomerApp";

function App() {
  //startup the mirage server
  startMirage();

  return (
    <div>
      <AdminApp />
      <CustomerApp />
    </div>
  );
}

export default App;

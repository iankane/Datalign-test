import React, { useEffect } from "react";

import AdminApp from "./AdminApp";
import ViewButtons from "./components/ViewButtons";
import { startMirage } from "./services/exampleServer";
import { getJSON, postJSON } from "./services/JSONResponseHandler";

function App() {
  //startup the mirage server
  startMirage();

  const [customers, setCustomers] = React.useState([]);
  getJSON("/api/customers/", setCustomers, "Got Customers: ");

  const [customerid, setcustomerid] = React.useState("");
  getJSON("/api/customers/:id", setcustomerid, "Got CustomersID: ");

  const [adverts, setAdverts] = React.useState([]);
  const [advertids, setAdvertids] = React.useState([]);
  getJSON("/api/customers/:id/advertids", setAdvertids, "Got advertids: ");

  const [advertid, setAdvertid] = React.useState(Number);
  getJSON("/api/adverts/:id", setAdvertid, "Got advertid: ");

  const [token, setToken] = React.useState([]);
  getJSON("/api/adverts/bytoken/:token", setToken, "Got token: ");

  postJSON("/api/adverts", adverts);
  postJSON("/api/customers", customers);
  postJSON("/api/customers/:id/adverts", advertids);
  postJSON("/api/customers/:id/advertids/:advertid", advertids);

  return (
    <div>
      <ViewButtons></ViewButtons>
      <AdminApp />
    </div>
  );
}

export default App;

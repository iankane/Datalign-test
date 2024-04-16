import React, { useEffect } from "react";

import AdminApp from "./AdminApp";
import ViewButtons from "./components/ViewButtons";
import { startMirage } from "./services/exampleServer";

function App() {
  //startup the mirage server
  startMirage();
  
  const [customers, setCustomers] = React.useState("");
  useEffect(() => {
    fetch("/api/customers/:id")
      .then((r) => console.log(r.json()))
      .then((customers) => {
          setCustomers(customers)
      });
  });

  return (
    <div>
      <ViewButtons></ViewButtons>
      <AdminApp />
    </div>
  );
}

export default App;

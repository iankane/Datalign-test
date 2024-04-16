import React, { useEffect } from "react";

import AdminApp from "./AdminApp";
import ViewButtons from "./components/ViewButtons";

function App() {
  const [account, setAccount] = React.useState("");
  useEffect(() => {
    fetch("/api/account")
      .then((r) => r.json())
      .then((account) => setAccount(account));
  });
  return (
    <div>
      <ViewButtons></ViewButtons>
      <AdminApp />
    </div>
  );
}

export default App;

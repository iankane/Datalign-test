import { useState } from "react";
import NewAccount from "./components/NewAccount";

function AdminApp() {
  const [accountName, setAccountName] = useState("");
  return <NewAccount />;
}

export default AdminApp;

import React, { useState, useEffect } from "react";
import NewAccount from "./components/NewAccount";
import CustomerContainer from "./components/CustomerContainer";

function AdminApp() {
  const [accountName, setAccountName] = useState("");

  //get the data from the server
  const [customer, setCustomer] = React.useState("");
  
  useEffect(() => {
    fetch("/api/customers")
      .then((r) => r.json())
      .then((customers) => {
        customers.map((customer) =>{
          setCustomer(customer)
        })
      });
  });
  
  return <div>
    <NewAccount />
    <CustomerContainer/>
    </div>;
}

export default AdminApp;

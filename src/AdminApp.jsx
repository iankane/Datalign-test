import React, { useState, useEffect } from "react";
import NewAccount from "./components/NewAccount";
import CustomerAccordion from "./components/CustomerAccordion";
import { startMirage } from "./services/exampleServer";

function AdminApp() {
  var customerList = [];
  const [customerName, setCustomerName] = useState("");

  //get the data from the server
  
  
  return <div>
    <NewAccount setter = {setCustomerName}></NewAccount>
    <div className="accordion" id="customerContainer">
      <CustomerAccordion key ={customerName.id} name={customerName}/>
    </div>
    </div>;
}

export default AdminApp;

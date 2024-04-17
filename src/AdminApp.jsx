import React, { useState, useEffect } from "react";
import CustomerAccordion from "./components/CustomerAccordion";
import { startMirage } from "./services/exampleServer";
import AdvertisementModal from "./components/AdvertisementModal";

function AdminApp() {
  const [account, setAccount] = useState("");
  var [customers, setCustomers] = useState([]);
  var handleSubmit = function (e) {
    console.log(account);
    setCustomers([...customers, account]);
    setAccount("");
  };

  //get the data from the server

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <label>
          Account Name
          <input
            type="text"
            value={account}
            onChange={(e) => {
              setAccount(e.target.value);
            }}
          />
        </label>
      </form>
      <div className="accordion" id="customerContainer">
        {customers.map((customer, i) => (
          <CustomerAccordion key={i.toString()} name={customer} n={i} />
        ))}
      </div>
      <AdvertisementModal />
    </div>
  );
}

export default AdminApp;

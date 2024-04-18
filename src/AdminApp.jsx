import React, { useState, useEffect } from "react";
import CustomerAccordion from "./components/CustomerAccordion";
import AdvertisementModal from "./components/AdvertisementModal";
import { Accordion } from "react-bootstrap";
import { getJSON, postJSON } from "./services/JSONResponseHandler";

function AdminApp() {
  const [account, setAccount] = useState("");
  const [currentAccount, setCurrentAccount] = useState("");
  var [customers, setCustomers] = useState([]);
  var [serverCustomers, setServerCustomers] = useState([]);
  var [ads, setAds] = useState([]);
  var handleSubmit = function (e) {
    setCustomers([...customers, account]);
    console.log(customers);
    postJSON("/api/customers", customers);
    setAccount("");
  };
  //gets the customers on startup and adds them to the customers
  React.useEffect(() => {
    getJSON("/api/customers", setServerCustomers);
    console.log("Customers on server: " + serverCustomers);
    if (serverCustomers != undefined) {
      setCustomers(serverCustomers);
    }
  });

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
      <Accordion>
        {customers.map((customer, i) => (
          <CustomerAccordion
            key={i.toString()}
            name={customer}
            n={i}
            ads={ads}
            currentSetter={setCurrentAccount}
            customers={customers}
          />
        ))}
      </Accordion>
      <AdvertisementModal
        adSetter={setAds}
        ads={ads}
        currentAccount={currentAccount}
      />
    </div>
  );
}

export default AdminApp;

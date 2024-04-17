import React, { useState, useEffect } from "react";
import CustomerAccordion from "./components/CustomerAccordion";
import AdvertisementModal from "./components/AdvertisementModal";
import { Accordion } from "react-bootstrap";

function AdminApp() {
  const [account, setAccount] = useState("");
  const [currentAccount, setCurrentAccount] = useState("");
  var [customers, setCustomers] = useState([]);
  var [ads, setAds] = useState([]);
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
      <Accordion>
        {customers.map((customer, i) => (
          <CustomerAccordion
            key={i.toString()}
            name={customer}
            n={i}
            ads={ads}
            currentSetter={setCurrentAccount}
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

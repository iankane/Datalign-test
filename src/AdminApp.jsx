import React, { useState } from "react";
import CustomerAccordion from "./components/CustomerAccordion";
import AdvertisementModal from "./components/AdvertisementModal";
import { Accordion, Button } from "react-bootstrap";
import { getJSON, postJSON } from "./services/JSONResponseHandler";
import Spacer from "./components/Spacer";
import "./css/AdminApp.css";
import { useLoaderData } from "react-router-dom";
import { startMirage } from "./services/exampleServer";

export const adminLoader = async () => {
  startMirage();
  const url = "http://localhost:3000";
  const res = await fetch(url + "/api/customers");
  console.log("Admin Loader Hit");
  return res.json();
};

function AdminApp() {
  const serverCustomers = useLoaderData();
  const [account, setAccount] = useState("");
  const [currentAccount, setCurrentAccount] = useState("");
  var [customers, setCustomers] = useState(serverCustomers.customers);

  var [ads, setAds] = useState([]);
  var [showModal, setShowModal] = useState(false);
  const space = "10px";
  var handleSubmit = function (e) {
    setCustomers([...customers, account]);
    postJSON("/api/customers", customers);
    setAccount("");
  };
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
        <Button
          className="buttonPadding"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Add Account
        </Button>
      </form>
      <Spacer size={space} />
      <Accordion>
        {customers.map((customer, i) => (
          <CustomerAccordion
            key={i.toString()}
            name={customer}
            n={i}
            ads={ads}
            currentSetter={setCurrentAccount}
            customers={customers}
            setShowModal={setShowModal}
          />
        ))}
      </Accordion>
      <Spacer size={space} />
      <AdvertisementModal
        adSetter={setAds}
        ads={ads}
        currentAccount={currentAccount}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}

export default AdminApp;

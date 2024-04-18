import React, { useState } from "react";
import CustomerAccordion from "./components/CustomerAccordion";
import AdvertisementModal from "./components/AdvertisementModal";
import { Accordion } from "react-bootstrap";
import { getJSON, postJSON } from "./services/JSONResponseHandler";
import Spacer from "./components/Spacer";

function AdminApp(props) {
  const [account, setAccount] = useState("");
  const [currentAccount, setCurrentAccount] = useState("");
  var [customers, setCustomers] = useState([]);
  var [serverCustomers, setServerCustomers] = useState([]);
  var [ads, setAds] = useState([]);
  const space = "10px";
  var handleSubmit = function (e) {
    setCustomers([...customers, account]);
    postJSON("/api/customers", customers);
    setAccount("");
  };
  //gets the customers on startup and adds them to the customers
  React.useEffect(() => {
    getJSON("/api/customers", setServerCustomers);
    if (serverCustomers != undefined) {
      setCustomers(serverCustomers);
    }
  }, []);
  if (!props.show) {
    return <div></div>;
  }
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
          />
        ))}
      </Accordion>
      <Spacer size={space} />
      <AdvertisementModal
        adSetter={setAds}
        ads={ads}
        currentAccount={currentAccount}
      />
    </div>
  );
}

export default AdminApp;

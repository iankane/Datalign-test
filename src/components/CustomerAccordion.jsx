import React, { useState } from "react";
import AdvertisementDetails from "./AdvertisementDetails";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-bootstrap";
import { postJSON } from "../services/JSONResponseHandler";

const CustomerAccordion = (props) => {
  const [accountName, setAccountName] = useState(props.name);
  const [tempAccountName, setTempAccountName] = useState("");
  let iterator = props.n;
  const updateAccounts = () => {
    //There should be an edit customers at ID but that's not in the mirage file?
    postJSON("/api/customers", props.customers);
  };

  return (
    <AccordionItem eventKey={iterator}>
      <AccordionHeader
        onClick={(e) => {
          props.currentSetter(accountName);
        }}
      >
        {accountName}
      </AccordionHeader>
      <AccordionBody>
        <Accordion>
          {props.ads.map((ad, i) => (
            <AdvertisementDetails
              ad={ad}
              n={i}
              key={i}
              customer={accountName}
            />
          ))}
        </Accordion>
        <div id="editAccountRegion">
          <label htmlFor={accountName + "EditInput"}>Account Name: </label>
          <input
            type="text"
            id={tempAccountName + "EditInput"}
            value={tempAccountName}
            onChange={(e) => {
              setTempAccountName(e.target.value);
            }}
          />
          <button
            type="button"
            className="btn btn-primary"
            id={accountName + "EditButton"}
            onClick={(e) => {
              setAccountName(tempAccountName);
              updateAccounts();
            }}
          >
            Edit Account
          </button>
        </div>
      </AccordionBody>
    </AccordionItem>
  );
};

export default CustomerAccordion;

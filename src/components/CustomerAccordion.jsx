import React, { useState } from "react";
import AdvertisementDetails from "./AdvertisementDetails";
import Spacer from "./Spacer";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Button,
} from "react-bootstrap";
import { postJSON } from "../services/JSONResponseHandler";
import "../css/CustomerAccordion.css";

const CustomerAccordion = (props) => {
  const space = "10px";
  const [accountName, setAccountName] = useState(props.name);
  const [tempAccountName, setTempAccountName] = useState(accountName);
  const handleShow = () => props.setShowModal(true);
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
        <Spacer size={space} />
        <div id="editAccountRegion" className="border border-secondary">
          <label htmlFor={accountName + "EditInput"}>Edit Account: </label>
          <input
            type="text"
            id={tempAccountName + "EditInput"}
            value={tempAccountName}
            onChange={(e) => {
              setTempAccountName(e.target.value);
            }}
          />

          <Button
            id={accountName + "EditButton"}
            className="buttonPadding"
            onClick={(e) => {
              setAccountName(tempAccountName);
              updateAccounts();
            }}
          >
            Edit Account
          </Button>
          <Spacer size={space} />
          <Button variant="primary" onClick={handleShow}>
            Create new Ad
          </Button>
        </div>
      </AccordionBody>
    </AccordionItem>
  );
};

export default CustomerAccordion;

import React, { useState } from "react";
import AdvertisementDetails from "./components/AdvertisementDetails";
import { Accordion, Form, Button } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { startMirage } from "./services/exampleServer";

export const customerLoader = async () => {
  console.log("Customer Loader Hit");
  return startMirage();
};

const CustomerApp = () => {
  const serverAdverts = useLoaderData();
  const report = "There was a 500 error on the Server.";
  const [customerName, setCustomerName] = useState("");
  const [ad, setAd] = useState(serverAdverts);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3000";
    const res = await fetch(url + "/api/customers:" + customerName);
    return res.json();
  };

  let params = new URL(document.location.toString()).searchParams;
  return (
    <>
      <Form style={{ marginLeft: "1em" }}>
        <Form.Group className="mb-3" controlId="formCustomer">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter compnayName"
            value={customerName}
            onChange={(e) => {
              setCustomerName(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      <Accordion>
        <AdvertisementDetails ad={ad} n={1} />
      </Accordion>
    </>
  );
};

export default CustomerApp;

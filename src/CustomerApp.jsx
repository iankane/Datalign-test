import React, { useState } from "react";
import { getJSON } from "./services/JSONResponseHandler";
import AdvertisementDetails from "./components/AdvertisementDetails";
import { startMirage } from "./services/exampleServer";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { Accordion } from "react-bootstrap";

export const customerLoader = async () => {
  console.log("Customer Loader Hit");
  return startMirage();
};

const CustomerApp = () => {
  const report = "There was a 500 error on the Server.";
  const [searchParams, setSearchParams] = useSearchParams();
  const [token, setToken] = useState(searchParams.get("token") || "");
  const [ad, setAd] = useState({});
  const [exampleAd, setExampleAd] = useState({
    account: "Ian",
    name: "Test Ad",
    text: "Testing the ads",
    textColor: "#FFFFFF",
    size: 12,
    backgroundColor: "#000000",
    token: "DatalignTest",
    active: true,
  });
  React.useEffect(() => {
    if (searchParams.size > 0) {
      setToken(searchParams.get("token"));
      getJSON("/api/adverts/bytoken/" + token, setAd);
    }
  });
  if (ad.account == undefined && exampleAd.token != token) {
    return <p>{report}</p>;
  } else if (exampleAd.token == token) {
    console.log("Hit the example Ad");
    return (
      <>
        <Accordion>
          <AdvertisementDetails ad={exampleAd} n={0} customer="Ian" />
        </Accordion>
      </>
    );
  } else {
    return <AdvertisementDetails ad={ad} n={0} customer={ad.account} />;
  }
};

export default CustomerApp;

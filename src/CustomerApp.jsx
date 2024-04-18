import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { getJSON } from "./services/JSONResponseHandler";
import AdvertisementDetails from "./components/AdvertisementDetails";

const CustomerApp = (props) => {
  const dummyAd = {
    account: "Ian",
    name: "Test Ad",
    text: "Testing the ads",
    textColor: "#FFFFFF",
    size: 12,
    backgroundColor: "#000000",
    active: true,
  };
  const [token, setToken] = useState("");
  const [ad, setAd] = useState(dummyAd);

  let params = new URL(document.location.toString()).searchParams;
  React.useEffect(() => {
    setToken(params.get("ad"));
    getJSON("/api/adverts/bytoken/:" + token, setAd);
  });
  if (!props.show) {
    return <div />;
  }
  return <AdvertisementDetails ad={ad} n={1} />;
};

export default CustomerApp;

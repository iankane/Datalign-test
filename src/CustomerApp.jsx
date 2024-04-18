import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { getJSON } from "./services/JSONResponseHandler";
import AdvertisementDetails from "./components/AdvertisementDetails";

const CustomerApp = () => {
  const [token, setToken] = useState("");
  const [ad, setAd] = useState([]);
  return <AdvertisementDetails ad={ad} n={1} />;
};

export default CustomerApp;

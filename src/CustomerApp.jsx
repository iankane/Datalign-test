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
  var report = "All's fine";
  const [token, setToken] = useState("");
  const [ad, setAd] = useState(dummyAd);

  let params = new URL(document.location.toString()).searchParams;
  React.useEffect(() => {
    if (params.size > 0) {
      setToken(params.get("ad"));
      getJSON("/api/adverts/bytoken/:" + token, setAd);
    } else {
      report = "No URL Param!";
    }
  });
  if (!props.show) {
    return <div />;
  } else if (!ad) {
    <p>{report}</p>;
  } else {
    return <AdvertisementDetails ad={ad} n={1} />;
  }
};

export default CustomerApp;

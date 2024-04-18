import React, { useState } from "react";
import { getJSON } from "./services/JSONResponseHandler";
import AdvertisementDetails from "./components/AdvertisementDetails";
import { Accordion } from "react-bootstrap";

const CustomerApp = (props) => {
  const report = "There was a 500 error on the Server.";
  const [token, setToken] = useState("");
  const [ad, setAd] = useState({});

  let params = new URL(document.location.toString()).searchParams;
  React.useEffect(() => {
    if (params.size > 0) {
      setToken(params.get("ad"));
      getJSON("/api/adverts/bytoken/:" + token, setAd);
    }
  });
  if (!props.show) {
    return <div />;
  } else if (ad.account == undefined) {
    return <p>{report}</p>;
  } else {
    return (
      <Accordion>
        <AdvertisementDetails ad={ad} n={1} />
      </Accordion>
    );
  }
};

export default CustomerApp;

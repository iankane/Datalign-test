import React from "react";
import { Accordion } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const AdvertisementDetails = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const accountName = props.ad.account;
  const iterator = props.n;
  const adName = props.ad.name;
  const adText = props.ad.text;
  const textColor = props.ad.textColor;
  const size = props.ad.size;
  const bgColor = props.ad.backgroundColor;
  const token = props.ad.token;
  const active = props.ad.active;
  const clickHandler = (e) => {
    console.log("Token :" + token);
    setSearchParams({ token: token });
  };
  if (accountName == props.customer)
    return (
      <Accordion.Item eventKey={iterator} onClick={clickHandler}>
        <Accordion.Header>{adName}</Accordion.Header>
        <Accordion.Body>
          <p
            style={{
              color: textColor,
              fontSize: size,
              background: bgColor,
            }}
          >
            {adText}
          </p>
          <p>{"Token is: " + token}</p>
          <p>{"Toggle is: " + active}</p>
        </Accordion.Body>
      </Accordion.Item>
    );
  else {
    return;
  }
};

export default AdvertisementDetails;

import React from "react";
import { AccordionBody, AccordionHeader, AccordionItem } from "react-bootstrap";

const AdvertisementDetails = (props) => {
  const accountName = props.ad.account;
  const iterator = props.n;
  const adName = props.ad.name;
  const adText = props.ad.text;
  const textColor = props.ad.textColor;
  const size = props.ad.size;
  const bgColor = props.ad.backgroundColor;
  const token = props.ad.token;
  const active = props.ad.active;
  if (accountName == props.customer)
    return (
      <AccordionItem eventKey={iterator}>
        <AccordionHeader>{adName}</AccordionHeader>
        <AccordionBody>
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
        </AccordionBody>
      </AccordionItem>
    );
  else {
    return;
  }
};

export default AdvertisementDetails;

import React from "react";
import { AccordionBody, AccordionHeader, AccordionItem } from "react-bootstrap";

const AdvertisementDetails = (props) => {
  const accountName = props.ad.account;
  const iterator = props.n;
  const adName = props.ad.name;
  const adText = props.ad.text;
  const textColor = props.ad.adTextColor;
  const size = props.ad.textSize;
  const bgColor = props.ad.backgroundColor;
  const active = props.ad.toggle;
  if (accountName == props.customer)
    return (
      <AccordionItem eventKey={iterator}>
        <AccordionHeader>{adName}</AccordionHeader>
        <AccordionBody>
          <p
            style={{
              color: textColor,
              size: size,
              background: bgColor,
            }}
          >
            {adText}
          </p>
          <p>{"Toggle is: " + active}</p>
        </AccordionBody>
      </AccordionItem>
    );
  else {
    return;
  }
};

export default AdvertisementDetails;

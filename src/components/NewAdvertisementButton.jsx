import React, { useState } from "react";

const NewAdvertisementButton = (props) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
    <button
      type="button"
      className="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#advertisementModal"
      id={props.accountName + "AddAdvertisement"}
    >
      Add Advertisement
    </button>
  );
};

export default NewAdvertisementButton;

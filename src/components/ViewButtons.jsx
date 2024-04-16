import React from "react";

const ViewButtons = () => {
  const [ShowAdmin, setSnowAdmin] = React.useState(false);
  const onClickAdmin = () => {
    setSnowAdmin(true);
  };
  const onClickCustomer = () => {
    setSnowAdmin(false);
  };

  return (
    <div className="buttonContainer">
      <button
        type="button"
        className="btn btn-light active"
        onClick={onClickAdmin}
      >
        Administrator View
      </button>
      <button type="button" className="btn btn-light" onClick={onClickCustomer}>
        Customer View
      </button>
    </div>
  );
};

export default ViewButtons;

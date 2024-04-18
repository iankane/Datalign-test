import React from "react";

const Spacer = (props) => {
  return (
    <div
      aria-label="Spacer"
      aria-disabled={true}
      role="separator"
      style={{ marginBottom: props.size }}
    ></div>
  );
};

export default Spacer;

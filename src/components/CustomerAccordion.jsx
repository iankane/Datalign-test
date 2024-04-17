import React, { useState } from "react";
import AdvertisementDetails from "./AdvertisementDetails";

const CustomerAccordion = (props) => {
  const [accountName, setAccountName] = useState(props.name);
  const [tempAccountName, setTempAccountName] = useState("");
  let iterator = props.n;
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={"Header" + iterator}>
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#accountCollapse" + iterator}
          aria-expanded="true"
          aria-controls={"accountCollapse" + iterator}
        >
          {accountName}
        </button>
      </h2>
      <div
        id={"accountCollapse" + iterator}
        className="accordion-collapse collapse show"
        aria-labelledby={"heading" + iterator}
        data-bs-parent="#customerContainer"
      >
        <div className="accordion-body" id={accountName + "-advertisements"}>
          <div id="advertRegion">
            <div
              className="accordion accordion-flush"
              id={accountName + "AdvertisementAccordian"}
            >
              <AdvertisementDetails />
              <div id="editAccountRegion">
                <label htmlFor={accountName + "EditInput"}>
                  Account Name:{" "}
                </label>
                <input
                  type="text"
                  id={tempAccountName + "EditInput"}
                  value={tempAccountName}
                  onChange={(e) => {
                    setTempAccountName(e.target.value);
                  }}
                />
                <button
                  type="button"
                  className="btn btn-primary"
                  id={accountName + "EditButton"}
                  onClick={(e) => {
                    setAccountName(tempAccountName);
                  }}
                >
                  Edit Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerAccordion;

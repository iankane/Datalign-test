import React from "react";

const CustomerAccordion = (props) => {
  let accountName = props.name;
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
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerAccordion;

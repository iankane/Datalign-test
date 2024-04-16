import React from "react";

interface AccountAccordianProps {
  accountName: string;
  n: number;
}

const AccountAccordian = ({ accountName, n }: AccountAccordianProps) => {
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header" id="heading{n}">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#accountCollapse{n}"
            aria-expanded="true"
            aria-controls="accountCollapse[{n}]"
          >
            {accountName}
          </button>
        </h2>
        <div
          id="accountCollapse{n}"
          className="accordion-collapse collapse"
          aria-labelledby="heading {n}"
          data-bs-parent="#accountList"
        >
          <div className="accordion-body" id="{accountName}-advertisements">
            <div id="advertRegion">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#advertisementModal"
                id="{accountName}AddAdvertisement"
              >
                Add Advertisement
              </button>
              <div
                className="accordion accordion-flush"
                id="{accountName}AdvertisementAccordian"
              ></div>
            </div>
            <div id="editAccountRegion">
              <label htmlFor="{accountName}EditInput">Account Name: </label>
              <input type="text" id="{accountName}EditInput" />
              <button
                type="button"
                className="btn btn-primary"
                id="{accountName}EditButton"
              >
                Edit Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountAccordian;

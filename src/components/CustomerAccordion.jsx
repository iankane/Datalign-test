import React from 'react'

const CustomerAccordion = (accountName, n) => {
  return (
    <div className="accordion-item">
            <h2 className="accordion-header" id="heading{n}">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accountCollapse{n}" aria-expanded="true" aria-controls="accountCollapse[n}]">
                {accountName}
              </button>
            </h2>
            <div id="accountCollapse{n}" className="accordion-collapse collapse" aria-labelledby="heading {n}" data-bs-parent="#accountList">
              <div className="accordion-body" id="{accountName}-advertisements">
                <div id="advertRegion">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#advertisementModal" id="{accountName}AddAdvertisement" data>Add Advertisement</button>
                    <div className="accordion accordion-flush" id="{accountName}AdvertisementAccordian">

                    </div>
                </div>
              </div>
            </div>
        </div>
  )
}

export default CustomerAccordion
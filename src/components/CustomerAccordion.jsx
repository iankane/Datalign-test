import React from 'react'

const CustomerAccordion = (props) => {
let accountName = props.name;
let key = props.key;

  return (
    <div className="accordion-item">
            <h2 className="accordion-header" id={key + "Header"}>
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#accountCollapse" + key} aria-expanded="true" aria-controls={"accountCollapse"+key}>
                {accountName}
              </button>
            </h2>
            <div id={"accountCollapse" + key} className="accordion-collapse collapse" aria-labelledby={"heading"+ key} data-bs-parent="#accountList">
              <div className="accordion-body" id={accountName+"-advertisements"}>
                <div id="advertRegion">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#advertisementModal" id={accountName+"AddAdvertisement"} data>Add Advertisement</button>
                    <div className="accordion accordion-flush" id={accountName + "AdvertisementAccordian"}>

                    </div>
                </div>
              </div>
            </div>
        </div>
  )
}

export default CustomerAccordion
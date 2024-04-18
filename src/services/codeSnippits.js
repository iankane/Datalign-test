const [customers, setCustomers] = React.useState("");
useEffect(() => {
  fetch("/api/customers/:id")
    .then((r) => console.log(r.json()))
    .then((customers) => {
      setCustomers(customers);
    });
});

var handleClick = (e) => {
  getJSON("/api/adverts/bytoken/:token", setToken, "Token is set!");
};
const url = new URL("http://localhost:3000/show");
const adId = new URLSearchParams(url.search);
if (adId != null) {
  //tmp = getJSON("/api/adverts/bytoken/:token", setToken, "URL Token obtained :")
}

getJSON("/api/customers/", setCustomers, "Got Customers: ");

const [customerid, setcustomerid] = React.useState("");
getJSON("/api/customers/:id", setcustomerid, "Got CustomersID: ");

const [adverts, setAdverts] = React.useState([]);
const [advertids, setAdvertids] = React.useState([]);
getJSON("/api/customers/:id/advertids", setAdvertids, "Got advertids: ");

const [advertid, setAdvertid] = React.useState(Number);
getJSON("/api/adverts/:id", setAdvertid, "Got advertid: ");

const [token, setToken] = React.useState([]);
getJSON("/api/adverts/bytoken/:token", setToken, "Got token: ");

postJSON("/api/adverts", adverts);
postJSON("/api/customers", customers);
postJSON("/api/customers/:id/adverts", advertids);
postJSON("/api/customers/:id/advertids/:advertid", advertids);

<div
  className="modal fade"
  id="advertisementModal"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabIndex="-1"
  aria-labelledby="advertisementModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="advertisementModalLabel">
          Create Advertisement
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="form-group">
            <label htmlFor="advertisementNameInput">Advertisement Name</label>
            <input
              type="text"
              value={adName}
              onChange={(e) => {
                setAdName(e.target.value);
              }}
              className="form-control"
              id="advertisementNameInput"
              placeholder="Enter name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="advertisementTextInput">Advertisement Text</label>
            <textarea
              value={adText}
              onChange={(e) => {
                setAdText(e.target.value);
              }}
              className="form-control"
              id="advertisementTextInput"
              placeholder="Enter your text here"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="advertTextColorPicker" className="form-label">
              Advertisement Text Color
            </label>
            <input
              type="color"
              className="form-control form-control-color"
              id="advertTextColorPicker"
              value={adTextColor}
              onChange={(e) => {
                setAdTextColor(e.target.value);
              }}
              title="Choose your text color"
            />
          </div>
          <div className="form-group">
            <label htmlFor="textSizeSelect">Text Size</label>
            <select
              className="form-select"
              id="textSizeSelect"
              onChange={(e) => {
                setTextSize(e.target.value);
              }}
            >
              {textSize.map((size, i) => {
                <option key={i} {...(size === 12 && "selected")}>
                  {size}
                </option>;
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="advertBackgroundColorPicker" className="form-label">
              Advertisement Background Color
            </label>
            <input
              type="color"
              className="form-control form-control-color"
              id="advertBackgroundColorPicker"
              value={backgroundColor}
              onChange={(e) => {
                setBackgroundColor(e.target.value);
              }}
              title="Choose your background color"
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="activeToggle"
              value={toggle}
              onChange={(e) => {
                setToggle(e.target.value);
              }}
            />
            <label className="form-check-label" htmlFor="activeToggle">
              Active?
            </label>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button
          type="button"
          className="btn btn-primary"
          id="createAdvertisementButton"
        >
          Create Advertisement
        </button>
      </div>
    </div>
  </div>
</div>;

<div className="accordion-item">
  <h2 className="accordion-header" id={"Header-" + iterator}>
    <button
      className="accordion-button"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target={"#accountCollapse-" + iterator}
      aria-expanded="true"
      aria-controls={"accountCollapse-" + iterator}
    >
      {accountName}
    </button>
  </h2>
  <div
    id={"accountCollapse" + iterator}
    className="accordion-collapse collapse"
    data-bs-parent="#customerContainer"
  >
    <div className="accordion-body" id={accountName + "-advertisements"}>
      <div id={iterator + "-advertRegion"}>
        <div
          className="accordion accordion-flush"
          id={accountName + "AdvertisementAccordian"}
        >
          <AdvertisementDetails />
          <div id="editAccountRegion">
            <label htmlFor={accountName + "EditInput"}>Account Name: </label>
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
</div>;

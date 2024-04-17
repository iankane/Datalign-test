import React, {useState} from 'react'

const AdvertisementModal = (props) => {

    const [adName, setAdName] = useState("");
    const [adText, setAdText] = useState("");
    const [adTextColor, setAdTextColor] = useState("#ffffff");
    const [textSize, setTextSize] = useState([8,10,12,14,16]);
    const [backgroundColor, setBackgroundColor] = useState("#563d7c");
    const [toggle, setToggle] = useState(false);
  return (
    <div className="modal fade" id="advertisementModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="advertisementModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="advertisementModalLabel">Create Advertisement</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            <form>
                <div className="form-group">
                  <label htmlFor="advertisementNameInput">Advertisement Name</label>
                  <input type="text" value={adName} onChange={(e) => {setAdName(e.target.value);}} className="form-control" id="advertisementNameInput" placeholder="Enter name"/>
                </div>
                <div className="form-group">
                  <label htmlFor="advertisementTextInput">Advertisement Text</label>
                  <textarea value={adText} onChange={(e) => {setAdText(e.target.value);}} className="form-control" id="advertisementTextInput" placeholder="Enter your text here"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="advertTextColorPicker" className="form-label">Advertisement Text Color</label>
                    <input type="color" className="form-control form-control-color" id="advertTextColorPicker" value={adTextColor} onChange={(e) => {setAdTextColor(e.target.value);}} title="Choose your text color"/>
                </div>
                <div className="form-group">
                    <label htmlFor="textSizeSelect">Text Size</label>
                    <select className="form-select" id="textSizeSelect"  onChange={(e) => {setTextSize(e.target.value);}} >
                        {textSize.map((size, i) => {
                            <option key={i} {...size===12 && "selected"}>{size}</option>
                        })}
                    </select>
                  </div>
                <div className="form-group">
                    <label htmlFor="advertBackgroundColorPicker" className="form-label">Advertisement Background Color</label>
                    <input type="color" className="form-control form-control-color" id="advertBackgroundColorPicker" value={backgroundColor} onChange={(e) => {setBackgroundColor(e.target.value);}} title="Choose your background color"/>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="activeToggle" value={toggle}  onChange={(e) => {setToggle(e.target.value);}} />
                  <label className="form-check-label" htmlFor="activeToggle">Active?</label>
                </div>
              </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary" id="createAdvertisementButton">Create Advertisement</button>
        </div>
      </div>
    </div>
</div>
  )
}

export default AdvertisementModal
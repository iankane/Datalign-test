import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { getJSON, postJSON } from "../services/JSONResponseHandler";
import { generateToken } from "../services/TokenGeneration";

const AdvertisementModal = (props) => {
  const [adName, setAdName] = useState("Ad Name");
  const [adText, setAdText] = useState("Ad Text Goes Here");
  const [adTextColor, setAdTextColor] = useState("");
  const [textSize, setTextSize] = useState(12);
  const [backgroundColor, setBackgroundColor] = useState("#563d7c");
  const [toggle, setToggle] = useState(false);

  const [show, setShow] = useState(false);

  const handleSave = () => {
    setShow(false);
    const token = generateToken(10);
    var ad = {
      account: props.currentAccount,
      name: adName,
      text: adText,
      textColor: adTextColor,
      size: textSize,
      backgroundColor: backgroundColor,
      token: token,
      active: toggle,
    };
    props.adSetter([...props.ads, ad]);
    postJSON("/api/adverts", ad);
    let customerID = {
      id: props.currentAccount,
      ad: { ad },
    };
    postJSON("/api/customers/:id/adverts", customerID);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const textSizeOptions = [8, 10, 12, 14, 16];

  //todo: Conditional rendering on the button
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create new Ad for current customer
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Create Advertisement For {props.currentAccount}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={adName}
                onChange={(e) => {
                  setAdName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Text</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                placeholder="Type your ad text here"
                rows={3}
                value={adText}
                onChange={(e) => {
                  setAdText(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Text Color</Form.Label>
              <Form.Control
                type="color"
                id="advertTextColorPicker"
                title="Choose your text color"
                value={adTextColor}
                onChange={(e) => {
                  setAdTextColor(e.target.value);
                }}
              />
              <Form.Label>Backgorund Color</Form.Label>
              <Form.Control
                type="color"
                id="advertTextColorPicker"
                title="Choose your text color"
                value={backgroundColor}
                onChange={(e) => {
                  setBackgroundColor(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> Text Size</Form.Label>
              <Form.Select
                value={textSize}
                onChange={(e) => {
                  setTextSize(e.target.value);
                }}
              >
                {textSizeOptions.map((size, i) => (
                  <option key={i.toString()}>{size}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="switch"
                label="activate ad"
                checked={toggle}
                onChange={(e) => {
                  setToggle(e.currentTarget.checked);
                }}
              ></Form.Check>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AdvertisementModal;

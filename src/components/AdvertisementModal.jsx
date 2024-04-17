import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { getJSON, postJSON } from "../services/JSONResponseHandler";

const AdvertisementModal = (props) => {
  const [adName, setAdName] = useState("");
  const [adText, setAdText] = useState("");
  const [adTextColor, setAdTextColor] = useState("");
  const [textSize, setTextSize] = useState(12);
  const [backgroundColor, setBackgroundColor] = useState("#563d7c");
  const [toggle, setToggle] = useState(false);

  const [show, setShow] = useState(false);

  const handleSave = () => {
    setShow(false);
    var ad = {
      name: adName,
      text: adText,
      textColor: adTextColor,
      size: textSize,
      backgroundColor: backgroundColor,
      active: toggle,
    };
    postJSON("/api/adverts", JSON.stringify(ad));
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const textSizeOptions = [8, 10, 12, 14, 16];

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create new Ad for current customer
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Advertisement</Modal.Title>
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
                  setBackgroundColor(e.target.value);
                }}
              >
                <option>Default Select</option>
                {textSizeOptions.map((size, i) => {
                  <option key={i}>{size}</option>;
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="switch"
                label="activate ad"
                value={toggle}
                onChange={(e) => {
                  setToggle(e.target.value);
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

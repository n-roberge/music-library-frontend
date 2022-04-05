import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function AddSong() {

  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
        
        <Button variant="primary" onClick={handleShow} className="addButton">
            Add
        </Button>
        
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Song</Modal.Title>
            </Modal.Header>
            <Modal.Body>Test space for future form</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Add Song
                </Button>
            </Modal.Footer>
        </Modal>
    </>
  );
}

export default AddSong;
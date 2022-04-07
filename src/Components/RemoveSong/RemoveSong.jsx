import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import RemoveSongForm from "../RemoveSongForm/RemoveSongForm";

function RemoveSong(props){
 
    const [showModal, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <span>
            <Button variant="primary" onClick={handleShow} className="removeButton">
                Remove
            </Button>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Remove Song</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RemoveSongForm  />
                </Modal.Body>
            </Modal>
        </span>
    )
}

export default RemoveSong;
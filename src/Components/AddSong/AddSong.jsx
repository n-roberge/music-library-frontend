import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import AddSongForm from "../AddSongForm/AddSongForm";

function AddSong(props){
 
    const [showModal, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <span>
            <Button variant="primary" onClick={handleShow} className="addButton">
                Add
            </Button>
            <Modal show={showModal} onHide={handleClose} id = "addModal">
                <Modal.Header closeButton>
                    <Modal.Title>Add Song</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddSongForm  />
                </Modal.Body>
            </Modal>
        </span>
    )
}

export default AddSong;
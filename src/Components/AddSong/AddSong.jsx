import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import AddSongForm from "../AddSongForm/AddSongForm";

function AddSong(props){
 
    const [showModal, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" onClick={handleShow} className="addButton">
                Add
            </Button>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Song</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* update here to put new song to db */}
                    {/* <AddSongForm addNewEntryProperty = {addNewEntry} /> */}
                    <AddSongForm  />
                </Modal.Body>
            </Modal>
        </div>
    )
    
}

export default AddSong;
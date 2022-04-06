import React, { Component } from 'react';
import {Form} from 'react-bootstrap';
 

class AddSongForm extends Component{
    state = {
        id: '',
        title: '',
        album: '',
        genre: '',
        releaseDate: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit(event){
        event.preventDefault();
        let newEntry = {
            id: id,
            title: title,
            album: album,
            genre: genre,
            releaseDate: releaseDate
        };

        props.addNewEntryProperty(newEntry);
    }

    render(){
        return (
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>ID: </Form.Label>
                <Form.Control type = "text" onChange={this.handleChange} value = {this.state.id}/>
                <Form.Label>Title: </Form.Label>
                <Form.Control type = "text" onChange={this.handleChange} value = {this.state.title}/>
                <Form.Label>Album: </Form.Label>
                <Form.Control type = "text" onChange={this.handleChange} value = {this.state.album}/>
                <Form.Label>Artist: </Form.Label>
                <Form.Control type = "text" onChange={this.handleChange} value = {this.state.artist}/>
                <Form.Label>Genre: </Form.Label>
                <Form.Control type = "text" onChange={this.handleChange} value = {this.state.genre}/>
                <Form.Label>Release Date: </Form.Label>
                <Form.Control type = "date" onChange={this.handleChange} value = {this.state.releaseDate}/>
                <button type='submit'>Add Song</button>
            </Form.Group>
        );
    };
}
 
export default AddSongForm;
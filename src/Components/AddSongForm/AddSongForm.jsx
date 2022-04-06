import React, { Component } from 'react';
import {Form} from 'react-bootstrap';
 

class AddSongForm extends Component{
    state = {
        id: '',
        title: '',
        album: '',
        artist: '',
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

        //test
        alert(`ID: ${this.state.id} title: ${this.state.title} album: ${this.state.album} artist: ${this.state.artist} genre: ${this.state.genre} release date: ${this.state.releaseDate}`);

        // let newEntry = {
        //     id: id,
        //     title: title,
        //     album: album,
        //     genre: genre,
        //     releaseDate: releaseDate
        // };

        // props.addNewEntryProperty(newEntry);
    }

    render(){
        return (
            <Form.Group>
                <Form.Label>ID: </Form.Label>
                <Form.Control type = "text" name = "id" onChange={this.handleChange} value = {this.state.id}/>
                <Form.Label>Title: </Form.Label>
                <Form.Control type = "text" name = "title" onChange={this.handleChange} value = {this.state.title}/>
                <Form.Label>Album: </Form.Label>
                <Form.Control type = "text" name = "album" onChange={this.handleChange} value = {this.state.album}/>
                <Form.Label>Artist: </Form.Label>
                <Form.Control type = "text" name = "artist" onChange={this.handleChange} value = {this.state.artist}/>
                <Form.Label>Genre: </Form.Label>
                <Form.Control type = "text" name = "genre" onChange={this.handleChange} value = {this.state.genre}/>
                <Form.Label>Release Date: </Form.Label>
                <Form.Control type = "date" name = "releaseDate" onChange={this.handleChange} value = {this.state.releaseDate}/>
                <button type='submit' onClick={(event) => this.handleSubmit(event)}>Add Song</button>
            </Form.Group>
        );
    };
}
 
export default AddSongForm;
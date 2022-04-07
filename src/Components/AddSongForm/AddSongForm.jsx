import React, { Component } from 'react';
import axios from 'axios';
import {Form, Button} from 'react-bootstrap';
 

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

    handleSubmit = (event) => {
        event.preventDefault();

        try {
            axios.post("http://localhost:5005/api/songs",
                {
                    "title": this.state.title,
                    "album": this.state.album,
                    "artist": this.state.artist,
                    "genre": this.state.genre,
                    "releaseDate": this.state.releaseDate,
                }
            )
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        }
        catch (ex) {
            console.log(ex)
        }
    }

    render(){
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <Form.Group>
                    <Form.Label>Title: </Form.Label>
                    <Form.Control 
                        type = "text" 
                        name = "title" 
                        onChange={this.handleChange} 
                        value = {this.state.title}/>
                    <Form.Label>Album: </Form.Label>
                    <Form.Control 
                        type = "text" 
                        name = "album" 
                        onChange={this.handleChange} 
                        value = {this.state.album}/>
                    <Form.Label>Artist: </Form.Label>
                    <Form.Control 
                        type = "text" 
                        name = "artist" 
                        onChange={this.handleChange} 
                        value = {this.state.artist}/>
                    <Form.Label>Genre: </Form.Label>
                    <Form.Control 
                        type = "text" 
                        name = "genre" 
                        onChange={this.handleChange} 
                        value = {this.state.genre}/>
                    <Form.Label>Release Date: </Form.Label>
                    <Form.Control 
                        //TODO check to see if the type can be date, but change format to MM/DD/YYYY
                        type = "text"
                        placeholder='MM/DD/YYYY' 
                        name = "releaseDate" 
                        onChange={this.handleChange} 
                        value = {this.state.releaseDate}/>
                    <Button type='submit' className = 'submitBtn'>Add Song</Button>
                </Form.Group>
            </form>
        );
    };
}
 
export default AddSongForm;
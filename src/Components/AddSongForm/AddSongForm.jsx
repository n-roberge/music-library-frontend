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

    handleClear = () => {
        this.state.title = ""
        this.state.album = ""
        this.state.artist = ""
        this.state.genre = ""
        this.state.releaseDate = ""
    }

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
                this.state.title = ""
                this.state.album = ""
                this.state.artist = ""
                this.state.genre = ""
                this.state.releaseDate = ""
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
                        {/* <div>
                            {this.state.errors.title ? <p style = {{color:'red'}}>{this.state.errors.title}</p>:''}
                        </div> */}
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
                        type = "text"
                        placeholder='MM/DD/YYYY' 
                        name = "releaseDate" 
                        onChange={this.handleChange} 
                        value = {this.state.releaseDate}/>
                    <div className='formButtonRow'>
                        <Button type='submit' className = 'formBtn'>Add Song</Button>
                        <Button className='formBtn' onClick={this.handleClear}>Clear Form</Button>
                    </div>
                </Form.Group>
            </form>
        );
    };
}
 
export default AddSongForm;
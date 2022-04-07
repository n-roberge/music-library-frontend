import React, { Component } from 'react';
import axios from 'axios';
import {Form, Button} from 'react-bootstrap';
 
class RemoveSongForm extends Component{
    state = {
        id: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();

        try {
            axios.delete(`http://localhost:5005/api/songs/${this.state.id}`,)
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
                    <Form.Label>ID: </Form.Label>
                    <Form.Control 
                        type = "text" 
                        name = "id" 
                        onChange={this.handleChange} 
                        value = {this.state.id}/>
                    <Button type='submit' className = 'submitBtn'>Remove Song</Button>
                </Form.Group>
            </form>
        );
    };
}
 
export default RemoveSongForm;
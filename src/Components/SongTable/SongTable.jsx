import React from 'react';
import axios from 'axios';
import {Table, Container} from 'react-bootstrap';

export default class MusicList extends React.Component {
  state = {music: []};

  componentDidMount() {
    this.makeGetRequest();
  }

  async makeGetRequest(){
    try {
        let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music/');
        let music = response.data;
        this.setState({music});
    }
    catch (ex){
        console.log('Error in API call')
    }
    }

    render() {
        return (  
            <Container className="songList">
                <Table striped bordered hover variant = "dark" >
                    <thead>
                        <tr >
                            <th className="songCells">ID</th>
                            <th className="songCells">Title</th>
                            <th className="songCells">Album</th>
                            <th className="songCells">Artist</th>
                            <th className="songCells">Genre</th>
                            <th className="songCells">Release Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.music.map((item)=>(
                        <tr key = {item.id}>
                            {Object.values(item).map((val) =>(
                                <td>{val}</td>
                            ))}
                        </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>  
        );   
    }
};

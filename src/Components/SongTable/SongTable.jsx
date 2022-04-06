import React from 'react';
import {Table, Container} from 'react-bootstrap';

const SongTable = (props) => {
    return (
        <Container className="songList">
            <Table striped bordered hover variant = "dark">
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
                    {props.parentSongs.map((item) =>{
                        return(
                            <tr key = {item.id}>{Object.values(item).map((val)=>(<td>{val}</td>))}</tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container> 
    );            
};

export default SongTable;
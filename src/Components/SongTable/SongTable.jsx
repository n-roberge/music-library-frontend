import axios from "axios";
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';

const SongTable = (props) => {

    const [music, setMusic] = useState();

    async function makeGetRequest(){
        try {
            let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music/');
            let musicArrays = response.data;
            console.log(musicArrays);
        }
        catch (ex){
            console.log('Error in API call')
        }
    };

    makeGetRequest();
    // return (  
    //     <div>
    //         <Table striped bordered hover variant = "dark">
    //             <thead>
    //                 <tr>
    //                     <th>ID</th>
    //                     <th>Title</th>
    //                     <th>Album</th>
    //                     <th>Artist</th>
    //                     <th>Genre</th>
    //                     <th>Release Date</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {music.map((item)=>(
    //                 <tr key = {item.id}>
    //                     {Object.values(item).map((val) =>(
    //                         <td>{val}</td>
    //                     ))}
    //                 </tr>
    //                 ))}
    //             </tbody>
    //         </Table>
    //     </div>
    // );   
};

 
export default SongTable;
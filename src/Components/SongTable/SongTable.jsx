import axios from "axios";
import React, { useState } from 'react';

const SongTable = (props) => {

    const [music, setMusic] = useState();

    async function makeGetRequest(){
        try {
            let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music/');
            // setMusic(...music, response.data)
            console.log(response.data)
        }
        catch (ex){
            console.log('Error in API call')
        }
    }

    makeGetRequest();

    return (  
        <div>
        {/* <p>{music.title}</p>
        <p>{music.artist}</p> */}
        </div>
    );
}
 
export default SongTable;
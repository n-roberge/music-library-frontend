import React, { useEffect, useState } from 'react';
import NavBar from "./Components/NavBar/NavBar";
import axios from 'axios';
import SearchBar from "./Components/SearchBar/SearchBar";
import AddSong from './Components/AddSong/AddSong';
import RemoveSong from './Components/RemoveSong/RemoveSong';
import SongTable from "./Components/SongTable/SongTable";

const App = () => {  

  const [songs, setSongs] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  async function makeGetRequest(){
    try {
        let response = await axios.get('http://localhost:5005/api/songs');
        let music = response.data;
        setSongs(music);
    }
    catch (ex){
        console.log('Error in API ')
    }
  };

  useEffect(() =>{
    makeGetRequest();
  }, [songs]);
  

  return (
    <div>
      <NavBar />
      <div className='searchAndButtons'>
        <SearchBar 
          parentSongs = {songs}
          parentSetSongs = {setSongs}
        />
        <div className='addRemoveBar text-center'>
          <AddSong />
          <RemoveSong />
        </div>
      </div>
      <SongTable parentSongs = {songs}/>
    </div>
  );
}

export default App;

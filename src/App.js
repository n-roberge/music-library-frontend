import React, { useEffect, useState } from 'react';
import NavBar from "./Components/NavBar/NavBar";
import axios from 'axios';
import SearchBar from "./Components/SearchBar/SearchBar";
import SongTable from "./Components/SongTable/SongTable";

const App = () => {  

  //TODO add songs to useState?
  const [songs, setSongs] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  async function makeGetRequest(){
    try {
        let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music/');
        let music = response.data;
        setSongs(music);
    }
    catch (ex){
        console.log('Error in API ')
    }
  };

  useEffect(() =>{
    makeGetRequest();
  }, []);
  

  return (
    <div>
      <NavBar />
      <SearchBar searchValue = {searchValue} setSearchValue = {setSearchValue}/>
      <SongTable parentSongs = {songs}/>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import NavBar from "./Components/NavBar/NavBar";
import SearchBar from "./Components/SearchBar/SearchBar";
import SongTable from "./Components/SongTable/SongTable";

function App() {

  //TODO add songs to useState?
  const [songs, setSongs] = useState()

  return (
    <div>
      <NavBar />
      <SearchBar />
      <SongTable />
    </div>
  );
}

export default App;

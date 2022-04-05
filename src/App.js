import NavBar from "./Components/NavBar/NavBar";
import SearchBar from "./Components/SearchBar/SearchBar";
import SongTable from "./Components/SongTable/SongTable";
import MusicList from "./Components/GetMusic/GetMusic";

function App() {
  return (
    <div>
      <NavBar />
      <SearchBar />
      {/* <SongTable /> */}
      <MusicList />
    </div>
  );
}

export default App;

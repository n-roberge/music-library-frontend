import {Container, Button} from 'react-bootstrap';
import AddSong from '../AddSong/AddSong';
import RemoveSong from '../RemoveSong/RemoveSong';
import { makeGetRequestFunction } from '../SongTable/SongTable';

const products = makeGetRequestFunction();

const SearchBar = (props) => {
    return (
        <Container className='searchBar text-center'>
            <form action="/" method="get">
                <label htmlFor="header-search">
                    <span className="visually-hidden">Search for songs, artists, etc ...</span>
                </label>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search for songs, artists, etc ..."
                    name="s" 
                />
                <Container className='buttonBar text-center'>
                    {/* <Button type="submit" className='searchButton'>Search</Button> */}
                    <AddSong />
                    <RemoveSong />
                </Container>
            </form>
        </Container>
      );
}
 
export default SearchBar;
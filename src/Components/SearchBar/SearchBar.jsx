import {Container} from 'react-bootstrap';

const SearchBar = (props) => {
    return (
        <Container className='searchBar'>
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
                <button type="submit">Search</button>
            </form>
        </Container>
      );
}
 
export default SearchBar;
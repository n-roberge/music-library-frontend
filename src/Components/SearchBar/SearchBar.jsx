import React, { useState } from 'react';
import {Container} from 'react-bootstrap';

const SearchBar = (props) => {
    const [songs, setSongs] = useState()
    const [search, setSearch] = useState('');
    // const searchedData = songs.filter (x => x.name === search);


    const handleSearch = (event) => {
        setSearch(event.target.value);
    //     setSongs(searchedData)
    //     console.log(search)
    };


    return (
        <>
        <Container className='searchBar text-center'>
            <form>
                <label>
                    <span className="visually-hidden">Search for songs, artists, etc ...</span>
                </label>
                <input
                    type="text"
                    id="search"
                    placeholder="Search for songs, artists, etc ..."
                    onChange={handleSearch}
                />
            </form>
        </Container>
        </>
    );    
}
 
export default SearchBar;
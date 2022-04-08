import React, { useState } from 'react';
import {Container, Button} from 'react-bootstrap';

const songs = [];

const SearchBar = (props) => {

    const [search, setSearch] = React.useState('');

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const data = {
        songs: songs.filter((item)=>
            item.name.toLowerCase().includes(search.toLocaleLowerCase)
        ),
    };

    return (
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
      );
}
 
export default SearchBar;
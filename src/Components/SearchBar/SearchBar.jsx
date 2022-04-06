import React, { useState } from 'react';
import {Container, Button} from 'react-bootstrap';
import AddSong from '../AddSong/AddSong';
import RemoveSong from '../RemoveSong/RemoveSong';
import { makeGetRequestFunction } from '../SongTable/SongTable';
import SongTable from '../SongTable/SongTable';

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
            <form action="/" method="get">
                <label htmlFor="search">
                    <span className="visually-hidden">Search for songs, artists, etc ...</span>
                </label>
                <input
                    type="text"
                    id="search"
                    placeholder="Search for songs, artists, etc ..."
                    onChange={handleSearch}
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
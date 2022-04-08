import React, { Component, useState } from 'react';
import {Container, Button, Table} from 'react-bootstrap';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {search: '', data: []};
    }

    handleSearch = (event) => {
        setSearch(event.target.value);
    };

    data = {
        songs: props.parentSongs.filter((item)=>
            item.toLowerCase().includes(search.toLowerCase())
        ),
    };

    render(){
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
                        onSearchChange={this.handleSearch}
                    />
                </form>
            </Container>
            <Table data = {data}/>
            </>
        );
    };
}
 
export default SearchBar;
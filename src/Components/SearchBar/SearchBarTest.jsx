import React, { Component, useState } from 'react';
import {Container, Button, Table} from 'react-bootstrap';

const SearchBarTest = (props) => (

    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBarTest;
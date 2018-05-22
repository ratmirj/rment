import React from 'react'
import PropTypes from 'prop-types'
import {SearchBar} from "./searchBar/searchBar";
import {SearchResult} from "./searchResults";

const MovieSearch = () => (
    <div>
        <SearchBar/>
        <SearchResult/>
    </div>
);

export { MovieSearch }
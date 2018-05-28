import React from 'react'
import PropTypes from 'prop-types'
import './searchBar.scss'

const SearchBar = () => (
    <form>
        <input className="searchbar__input" type="text"/>
        <div className="searchbar__controlls">
            <div className="searchbar__seachby">
                Sort By
                <button>Name</button>
                <button>Genre</button>
            </div>
            <div className="searchbar__search">
                <button>Search</button>
            </div>
        </div>
    </form>
);

export { SearchBar }
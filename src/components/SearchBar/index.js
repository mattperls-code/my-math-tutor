/*
    •--------------------------------•
    |                                |
    |     © 2021 Matthew Perlman     |
    |                                |
    •--------------------------------•
*/

import React from "react"

import "./styles.scss"

const SearchBar = ({placeholder, onChange}) => {
    return (
        <div className="searchBarComponentContainer">
            <input id="searchBar" className="searchBar" type="text" placeholder={placeholder} onChange={onChange}/>
        </div>
    )
}

export default SearchBar
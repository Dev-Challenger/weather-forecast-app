import React, { useState } from 'react';
import { AsyncPaginate } from "react-select-async-paginate";
import { fetchCities } from '../services/fetchCitites';
import  SearchBarStyles from './styles/SearchBarStyles.js';

const SearchBar = ({ placeholder, onSearchChange }) => {

    const [search, setSearch] = useState(null)

    const handleOnChange = (searchInput) => {
        setSearch(searchInput)
        onSearchChange(searchInput)
    }

    return (
            <AsyncPaginate
                id='search-bar'
                debounceTimeout={400}
                placeholder={placeholder}
                value={search}
                onChange={handleOnChange}
                loadOptions={fetchCities}
                styles={SearchBarStyles}
            />
    );
};




export default SearchBar;
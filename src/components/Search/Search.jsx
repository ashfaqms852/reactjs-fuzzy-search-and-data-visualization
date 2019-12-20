import React from 'react';
import { Input } from 'semantic-ui-react'
function Search(props) {
    return (
        <Input placeholder="Search for keyword" 
            value={props.searchWord}
            name="searchWord"
            onChange={props.handleChange}  
        />
    );
}

export default Search;
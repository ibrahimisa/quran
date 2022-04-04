import React, { useState } from 'react';
import FormControl from 'react-bootstrap/FormControl'

function Search({ searchChangeHandler, searchValue }) {
  return (
    <div>
      <FormControl
        type="search"
        placeholder="Search for suras"
        value={searchValue}
        onChange={searchChangeHandler}
        className="px-3"
      />
    </div>
  );
}

export default Search;

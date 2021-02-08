import React from 'react';
import './styles.less'

const SearchBox = () => {
  return (
    <div className="searchContainer">
      <input
        type="text"
        placeholder="جستجو در رستوران"
        className="searchContainer__input"
      />
    </div>
  );
};

export default SearchBox;

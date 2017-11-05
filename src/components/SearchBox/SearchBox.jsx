import React from 'react';

const SearchBox = ({placeholderText, keyDownHandler, keyUpHandler}) => (
  <input
    type="text"
    placeholder={placeholderText}
    onKeyDown={keyDownHandler}
    onKeyUp={keyUpHandler}
  />
);

export default SearchBox;

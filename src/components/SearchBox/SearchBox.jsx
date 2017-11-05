import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({placeholderText, keyDownHandler, keyUpHandler}) => (
  <input
    type="text"
    placeholder={placeholderText}
    onKeyDown={keyDownHandler}
    onKeyUp={keyUpHandler}
  />
);

SearchBox.defaultProps = {
  placeholderText: '',
  keyDownHandler: e => { e.preventDefault(); },
  keyUpHandler: e => { e.preventDefault(); },
};

SearchBox.propTypes = {
  placeholderText: PropTypes.string,
  keyDownHandler: PropTypes.func,
  keyUpHandler: PropTypes.func,
};

export default SearchBox;

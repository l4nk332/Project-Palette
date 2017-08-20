import React from 'react'

function SearchBox({placeholderText, keyDownHandler, keyUpHandler}) {
  return (
    <input
      type='text'
      placeholder={placeholderText}
      onKeyDown={keyDownHandler}
      onKeyUp={keyUpHandler}
    />
  )
}

export default SearchBox

import React from 'react'

function ColorSwatch({color}) {
  return (
    <div
      style={{backgroundColor: color}}
      className='color-swatch'
    ></div>
  )
}

export default ColorSwatch

import React from 'react'

function ColorSwatch({color}) {
  return (
    <div
      style={{backgroundColor: color, width: 100, height: 100}}
      className='color-swatch'
    ></div>
  )
}

export default ColorSwatch

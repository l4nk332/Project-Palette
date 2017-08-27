import React from 'react'
import { getTextColor } from '../../utils/color-manipulation'

function ColorSwatch({color}) {
  return (
    <div
      style={{backgroundColor: color, width: 100, height: 100}}
      className='color-swatch'
    >
      <span style={{color: getTextColor(color)}}>{color.toLowerCase()}</span>
    </div>
  )
}

export default ColorSwatch

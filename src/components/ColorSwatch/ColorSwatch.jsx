import React from 'react'
import './ColorSwatch.sass'
import { getTextColor } from '../../utils/color-manipulation'

function ColorSwatch({color}) {
  return (
    <div
      style={{backgroundColor: color}}
      className='color-swatch'
    >
      <span style={{color: getTextColor(color)}}>{color.toLowerCase()}</span>
    </div>
  )
}

export default ColorSwatch

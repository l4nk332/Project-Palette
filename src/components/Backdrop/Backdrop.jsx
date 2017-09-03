import React from 'react'
import { getTextColor } from '../../utils/color-manipulation'

import './Backdrop.sass'

function Backdrop({color, children}) {
  return (
    <div
      className='Backdrop'
      style={{color: getTextColor(color), backgroundColor: color}}>
      {children}
    </div>
  )
}

export default Backdrop

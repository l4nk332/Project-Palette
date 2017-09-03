import React from 'react'
import { getTextColor } from '../../../utils/color-manipulation'

import './LocationListItem.sass'

function LocationListItem({filePath, lineNumber}) {
  return (
    <div className='LocationListItem'>
      <div className='LocationListItem__filePath'>
        {filePath}
      </div>
      :{lineNumber}
    </div>
  )
}

export default LocationListItem

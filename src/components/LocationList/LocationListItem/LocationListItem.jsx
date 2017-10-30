import React from 'react'
import { getTextColor } from '../../../utils/color-manipulation'

import './LocationListItem.sass'

function LocationListItem({filePath, lineNumber, projectUrl}) {
  return (
    <a
      href={`${projectUrl}/blob/master/${filePath}#L${lineNumber}`}
      className='LocationListItem'
      target='_blank'
    >
      <div className='LocationListItem__filePath'>
        {filePath}
      </div>
      :{lineNumber}
    </a>
  )
}

export default LocationListItem

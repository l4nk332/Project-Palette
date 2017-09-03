import React from 'react'
import LocationListItem from './LocationListItem/LocationListItem.jsx'
import { getAlphaBackgroundColor } from '../../utils/color-manipulation'

import './LocationList.sass'

function LocationList({color, locations}) {
    return (
      <div
        className='LocationList'
        style={{backgroundColor: getAlphaBackgroundColor(color)}}>
        {locations.map(({filePath, lineNumber}, index) => (
          <LocationListItem
            key={index}
            filePath={filePath}
            lineNumber={lineNumber}
          />
        ))}
      </div>
    )
}

export default LocationList

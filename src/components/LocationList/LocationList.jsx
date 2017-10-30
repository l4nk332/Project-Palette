import React from 'react'
import LocationListItem from './LocationListItem/LocationListItem.jsx'
import { getAlphaBackgroundColor } from '../../utils/color-manipulation'

import './LocationList.sass'

function LocationList({color, locations, projectUrl}) {
    return (
      <div
        className='LocationList'
        style={{backgroundColor: getAlphaBackgroundColor(color)}}>
        {locations.map(({filePath, lineNumber}, index) => (
          <LocationListItem
            key={index}
            filePath={filePath}
            lineNumber={lineNumber}
            projectUrl={projectUrl}
          />
        ))}
      </div>
    )
}

export default LocationList

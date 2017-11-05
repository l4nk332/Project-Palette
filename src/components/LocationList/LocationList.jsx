import React from 'react';
import shortid from 'shortid';
import LocationListItem from './LocationListItem/LocationListItem';
import {getAlphaBackgroundColor} from '../../utils/color-manipulation';

import './LocationList.sass';

const alphaBackgroundColor = color => ({
  backgroundColor: getAlphaBackgroundColor(color),
});

const LocationList = ({color, locations, projectUrl}) => (
  <div
    className="LocationList"
    style={alphaBackgroundColor(color)}
  >
    {locations.map(({filePath, lineNumber}) => (
      <LocationListItem
        key={shortid.generate()}
        filePath={filePath}
        lineNumber={lineNumber}
        projectUrl={projectUrl}
      />
    ))}
  </div>
);

export default LocationList;

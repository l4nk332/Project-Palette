import React from 'react';
import PropTypes from 'prop-types';
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

LocationList.propTypes = {
  color: PropTypes.string.isRequired,
  locations: PropTypes.arrayOf(PropTypes.object).isRequired,
  projectUrl: PropTypes.string.isRequired,
};

export default LocationList;

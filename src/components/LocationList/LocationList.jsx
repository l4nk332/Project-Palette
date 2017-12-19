import React from 'react';
import PropTypes from 'prop-types';
import {getAlphaBackgroundColor} from 'utils/color-manipulation';

import LocationListItem from './LocationListItem/LocationListItem';

import s from './LocationList.sass';

const alphaBackgroundColor = color => ({
  backgroundColor: getAlphaBackgroundColor(color),
});

const LocationList = ({color, locations, projectUrl}) => (
  <section className={s.container}>
    <div
      className={s.list}
      style={alphaBackgroundColor(color)}
    >
      {locations.map(({filePath, lineNumber}, idx) => (
        <LocationListItem
          key={idx}
          filePath={filePath}
          lineNumber={lineNumber}
          projectUrl={projectUrl}
        />
      ))}
    </div>
  </section>
);

LocationList.propTypes = {
  color: PropTypes.string.isRequired,
  locations: PropTypes.arrayOf(PropTypes.object).isRequired,
  projectUrl: PropTypes.string.isRequired,
};

export default LocationList;

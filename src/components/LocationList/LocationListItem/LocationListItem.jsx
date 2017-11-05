import React from 'react';
import PropTypes from 'prop-types';

import './LocationListItem.sass';

const LocationListItem = ({filePath, lineNumber, projectUrl}) => (
  <a
    href={`${projectUrl}/blob/master/${filePath}#L${lineNumber}`}
    className="LocationListItem"
    target="_blank"
  >
    <div className="LocationListItem__filePath">{filePath}</div>
    :{lineNumber}
  </a>
);

LocationListItem.propTypes = {
  filePath: PropTypes.string.isRequired,
  lineNumber: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  projectUrl: PropTypes.string.isRequired,
};

export default LocationListItem;

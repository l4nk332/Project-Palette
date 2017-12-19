import React from 'react';
import PropTypes from 'prop-types';

import s from './LocationListItem.sass';

const LocationListItem = ({filePath, lineNumber, projectUrl}) => (
  <a
    href={`${projectUrl}/blob/master/${filePath}#L${lineNumber}`}
    className={s.container}
    target="_blank"
  >
    <div className={s.path}>{filePath}</div>
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

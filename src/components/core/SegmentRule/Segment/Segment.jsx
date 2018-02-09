import React from 'react';
import PropTypes from 'prop-types';

import s from './Segment.sass';

const Segment = ({color}) => (
  <span className={s.container} style={{backgroundColor: color}} />
);

Segment.defaultProps = {
  color: '#000',
};

Segment.propTypes = {
  color: PropTypes.string,
};

export default Segment;

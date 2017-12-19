import React from 'react';
import PropTypes from 'prop-types';

import s from './Rule.sass';

const Rule = ({color}) => (
  <hr className={s.container} style={{borderColor: color}} />
);

Rule.defaultProps = {
  color: '#000',
};

Rule.propTypes = {
  color: PropTypes.string,
};

export default Rule;

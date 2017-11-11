import React from 'react';
import PropTypes from 'prop-types';

import './Rule.sass';

const Rule = ({color}) => (
  <hr
    className="rule"
    style={{borderColor: color}}
  />
);

Rule.defaultProps = {
  color: '#000',
};

Rule.propTypes = {
  color: PropTypes.string,
};

export default Rule;

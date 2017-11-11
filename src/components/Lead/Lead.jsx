import React from 'react';
import PropTypes from 'prop-types';

import './Lead.sass';

const Lead = ({children}) => <p className="lead">{children}</p>;

Lead.defaultProps = {
  children: '',
};

Lead.propTypes = {
  children: PropTypes.node,
};

export default Lead;

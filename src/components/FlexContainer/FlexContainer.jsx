import React from 'react';
import PropTypes from 'prop-types';

import './FlexContainer.sass';

const FlexContainer = ({children}) => (
  <div className="flex-container">{children}</div>
);

FlexContainer.defaultProps = {
  children: null,
};

FlexContainer.propTypes = {
  children: PropTypes.node,
};

export default FlexContainer;

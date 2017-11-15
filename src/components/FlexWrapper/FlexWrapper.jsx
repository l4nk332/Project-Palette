import React from 'react';
import PropTypes from 'prop-types';

import './FlexWrapper.sass';

const FlexWrapper = ({children}) => (
  <div className="flex-wrapper">{children}</div>
);

FlexWrapper.defaultProps = {
  children: null,
};

FlexWrapper.propTypes = {
  children: PropTypes.node,
};

export default FlexWrapper;

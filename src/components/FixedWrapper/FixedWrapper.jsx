import React from 'react';
import PropTypes from 'prop-types';
import {getTextColor} from 'utils/color-manipulation';

import './FixedWrapper.sass';

const readableColors = color => ({
  color: getTextColor(color),
  backgroundColor: color,
});

const FixedWrapper = ({color, children}) => (
  <div className="fixed-wrapper" style={readableColors(color)}>
    {children}
  </div>
);

FixedWrapper.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FixedWrapper;

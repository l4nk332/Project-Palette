import React from 'react';
import PropTypes from 'prop-types';
import {getTextColor} from '../../utils/color-manipulation';

import './Backdrop.sass';

const readableColors = color => ({
  color: getTextColor(color),
  backgroundColor: color,
});

const Backdrop = ({color, children}) => (
  <div className="Backdrop" style={readableColors(color)}>
    {children}
  </div>
);

Backdrop.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Backdrop;

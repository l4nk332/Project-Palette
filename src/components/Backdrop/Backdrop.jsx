import React from 'react';
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

export default Backdrop;

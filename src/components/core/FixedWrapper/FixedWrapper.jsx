import React from 'react';
import PropTypes from 'prop-types';
import {getTextColor} from 'utils/color-manipulation';

import s from './FixedWrapper.sass';

const readableColors = color => ({
  color: getTextColor(color),
  backgroundColor: color,
});

const FixedWrapper = ({color, children}) => (
  <div className={s.container} style={readableColors(color)}>
    {children}
  </div>
);

FixedWrapper.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FixedWrapper;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  BLUE,
  TURQUOISE,
  PINK,
  PURPLE,
} from 'utils/constants';

import s from './GradientRule.sass';

const GradientRule = ({colors, height, animate}) => (
  <section
    className={classNames(s.container, {[s.animate]: animate})}
    style={{
      backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
      height,
    }}
  />
);

GradientRule.defaultProps = {
  colors: [PINK, TURQUOISE, PURPLE, BLUE],
  height: '10px',
  animate: false,
};

GradientRule.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
  height: PropTypes.string,
  animate: PropTypes.bool,
};

export default GradientRule;

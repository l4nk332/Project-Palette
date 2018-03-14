import React from 'react';
import PropTypes from 'prop-types';

import s from './Pie.sass';

const calculateDash = percentage => (
  percentage === 50
    ? percentage + 0.2
    : percentage > 50
      ? percentage + 1
      : percentage
);

const Pie = ({percentage, color}) => (
  <svg
    className={s.svg}
    viewBox="0 0 32 32"
  >
    <circle
      className={s.circle}
      r="16"
      cx="16"
      cy="16"
      stroke={color}
      style={{strokeDasharray: `${calculateDash(percentage)} 100`}}
    />
  </svg>
);

Pie.propTypes = {
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default Pie;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import s from './Pie.sass';

const Pie = ({percentage, color}) => (
  <figure className={s.container} style={{backgroundImage: `linear-gradient(to right, transparent 50%, ${color} 0)`}}>
    <section
      className={classNames(s.percentage, {[s.secondHalf]: percentage > 50})}
      style={{
        transform: `rotate(${((percentage > 50 ? percentage - 50 : percentage) / 100) * 360}deg)`,
        backgroundColor: color,
      }}
    />
  </figure>
);

Pie.propTypes = {
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default Pie;

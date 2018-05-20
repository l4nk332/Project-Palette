import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {getTextColor} from 'utils/color-manipulation';

import s from './ProgressBar.sass';

const ProgressBar = ({units, showPercentages, size}) => (
  <section className={s.container}>
    {units.map((unit, key) => (
      <figure
        key={key}
        className={classNames(s.unit, {[s[size]]: size})}
        style={{
          background: unit.color,
          color: getTextColor(unit.color),
          width: `${unit.percentage}%`,
        }}
        title={unit.label}
      >
        {showPercentages && unit.label}
      </figure>
    ))}
  </section>
);

ProgressBar.defaultProps = {
  units: [],
  showPercentages: false,
  size: 'large',
};

ProgressBar.propTypes = {
  units: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })),
  showPercentages: PropTypes.bool,
  size: PropTypes.oneOf(['medium', 'large']),
};

export default ProgressBar;

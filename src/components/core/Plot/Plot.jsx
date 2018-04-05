import React from 'react';
import PropTypes from 'prop-types';

import {ColorSpectrum} from 'components';

import s from './Plot.sass';

const Plot = ({points}) => (
  <main className={s.container}>
    <section className={s.yAxis}>
      <span>5</span>
      <span>4</span>
      <span>3</span>
      <span>2</span>
      <span>1</span>
    </section>
    <svg className={s.points} viewBox="0 0 100 100">
      {points.map((point, idx) => (
        <circle
          cx={point.x}
          cy={point.y}
          className={s.point}
          fill={point.color}
          r="3"
          key={idx}
        />
      ))}
    </svg>
    <ColorSpectrum className={s.spectrum} />
  </main>
);

Plot.defaultProps = {
  points: [],
};

Plot.propTypes = {
  points: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.string,
  })),
};

export default Plot;

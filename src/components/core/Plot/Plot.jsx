import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ColorSpectrum } from 'components';

import s from './Plot.sass';

const Plot = ({
  xScale,
  yScale,
  xAxis,
  yAxis,
  points,
}) => (
  <main
    className={s.container}
    style={{width: `300px`, height: `300px`, margin: '0 0 42px 42px'}}
  >

    <section
      style={{
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        height: '100%',
        padding: '0 1em',
        position: 'absolute',
        left: '-2.7em',
        bottom: '0',
      }}
    >
      <span>5</span>
      <span>4</span>
      <span>3</span>
      <span>2</span>
      <span>1</span>
    </section>

    {points.map((point, idx) => (
      <span
        title={point.color}
        className={s.point}
        style={{
          backgroundColor: point.color,
          padding: point.size || '0.4em',
          bottom: `calc(${point.y * 3}px - ${point.size || '0.4em'})`,
          left: `calc(${point.x * 3}px - ${point.size || '0.4em'})`,
        }}
        key={idx}
      />
    ))}
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
  xScale: PropTypes.number.isRequired,
  yScale: PropTypes.number.isRequired,
};

export default Plot;

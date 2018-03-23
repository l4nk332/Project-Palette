import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import s from './Plot.sass';

const Plot = ({
  width,
  height,
  points,
  showAxis,
}) => (
  <main
    className={classNames(s.container, {[s.axis]: showAxis})}
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

    <section
      style={{
        background: 'linear-gradient(to right, hsla(0, 100%, 50%, 1),hsla(10, 100%, 50%, 1),hsla(20, 100%, 50%, 1),hsla(30, 100%, 50%, 1),hsla(40, 100%, 50%, 1),hsla(50, 100%, 50%, 1),hsla(60, 100%, 50%, 1),hsla(70, 100%, 50%, 1),hsla(80, 100%, 50%, 1),hsla(90, 100%, 50%, 1),hsla(100, 100%, 50%, 1),hsla(110, 100%, 50%, 1),hsla(120, 100%, 50%, 1),hsla(130, 100%, 50%, 1),hsla(140, 100%, 50%, 1),hsla(150, 100%, 50%, 1),hsla(160, 100%, 50%, 1),hsla(170, 100%, 50%, 1),hsla(180, 100%, 50%, 1),hsla(190, 100%, 50%, 1),hsla(200, 100%, 50%, 1),hsla(210, 100%, 50%, 1),hsla(220, 100%, 50%, 1),hsla(230, 100%, 50%, 1),hsla(240, 100%, 50%, 1),hsla(250, 100%, 50%, 1),hsla(260, 100%, 50%, 1),hsla(270, 100%, 50%, 1),hsla(280, 100%, 50%, 1),hsla(290, 100%, 50%, 1),hsla(300, 100%, 50%, 1),hsla(310, 100%, 50%, 1),hsla(320, 100%, 50%, 1),hsla(330, 100%, 50%, 1),hsla(340, 100%, 50%, 1),hsla(350, 100%, 50%, 1),hsla(360, 100%, 50%, 1))',
        position: 'absolute',
        bottom: '-2.3em',
        left: '0',
        width: '100%',
        height: '15px'
      }}
    />

  </main>
);

Plot.defaultProps = {
  points: [],
  showAxis: false
};

Plot.propTypes = {
  points: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.string,
  })),
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  showAxis: PropTypes.bool,
};

export default Plot;

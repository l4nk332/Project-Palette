import React from 'react';
import PropTypes from 'prop-types';

import {ColorSwatchContainer} from 'containers';

import s from './ColorGrid.sass';

const ColorGrid = ({colors, openColorDetail}) => (
  <section className={s.container}>
    {colors.map(color => (
      <ColorSwatchContainer
        key={color}
        color={color}
        openColorDetail={openColorDetail}
      />
    ))}
  </section>
);

ColorGrid.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  openColorDetail: PropTypes.func.isRequired,
};

export default ColorGrid;

import React from 'react';
import PropTypes from 'prop-types';

import {ColorSwatch} from 'components';

import s from './ColorGrid.sass';

const ColorGrid = ({colors, openColorDetail}) => (
  <section className={s.container}>
    {colors.map(color => (
      <ColorSwatch
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

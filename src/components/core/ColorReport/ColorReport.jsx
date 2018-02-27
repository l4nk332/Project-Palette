import React from 'react';
import PropTypes from 'prop-types';

import {ContrastMeter, ColorList} from 'components';

import s from './ColorReport.sass';

const ColorReport = ({contrast, palette, openColorDetail}) => (
  <section className={s.container}>
    <ContrastMeter contrast={contrast} />
    <ColorList palette={palette} openColorDetail={openColorDetail} />
  </section>
);

ColorReport.propTypes = {
  contrast: PropTypes.shape({
    light: PropTypes.number.isRequired,
    dark: PropTypes.number.isRequired,
  }).isRequired,
  palette: PropTypes.object.isRequired,
  openColorDetail: PropTypes.func.isRequired,
};

export default ColorReport;

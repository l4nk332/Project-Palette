import React from 'react';
import PropTypes from 'prop-types';

import {ContrastMeter} from 'components';

import s from './ColorReport.sass';

const ColorReport = ({contrast}) => (
  <section className={s.container}>
    <ContrastMeter contrast={contrast} />
  </section>
);

ColorReport.propTypes = {
  contrast: PropTypes.shape({
    light: PropTypes.number.isRequired,
    dark: PropTypes.number.isRequired,
  }).isRequired,
};

export default ColorReport;

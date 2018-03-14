import React from 'react';
import PropTypes from 'prop-types';

import {ContrastMeter, ColorList, PrimaryColorChart} from 'components';

import s from './ColorReport.sass';

const ColorReport = ({
  contrast,
  palette,
  openColorDetail,
  primaryColor,
}) => (
  <section className={s.container}>
    <ContrastMeter contrast={contrast} />
    <PrimaryColorChart
      percentage={primaryColor.percentage}
      color={primaryColor.color}
    />
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
  primaryColor: PropTypes.shape({
    percentage: PropTypes.number,
    color: PropTypes.string,
  }).isRequired,
};

export default ColorReport;

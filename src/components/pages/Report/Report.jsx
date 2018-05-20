import React from 'react';
import PropTypes from 'prop-types';

import {
  ContrastMeter,
  ColorAverages,
  ColorList,
  PrimaryColorChart,
} from 'components';

import {getColorAverages} from 'utils/color-manipulation';

import s from './Report.sass';

const Report = ({
  contrast,
  palette,
  openColorDetail,
  primaryColor,
}) => (
  <section className={s.container}>
    <section className={s.chart}>
      <PrimaryColorChart
        percentage={primaryColor.percentage}
        color={primaryColor.color}
      />
    </section>
    <section className={s.averages}>
      <ColorAverages averages={getColorAverages(Object.keys(palette))} />
    </section>
    <section className={s.contrast}>
      <ContrastMeter contrast={contrast} />
    </section>
    <section className={s.list}>
      <ColorList palette={palette} openColorDetail={openColorDetail} />
    </section>
  </section>
);

Report.propTypes = {
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

export default Report;

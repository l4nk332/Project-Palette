import React from 'react';
import PropTypes from 'prop-types';

import {
  ContrastMeter,
  ColorList,
  PrimaryColorChart,
} from 'components';

import s from './Report.sass';

const Report = ({
  contrast,
  palette,
  openColorDetail,
  primaryColor,
}) => (
  <section className={s.container}>
    <section className={s.row}>
      <PrimaryColorChart
        percentage={primaryColor.percentage}
        color={primaryColor.color}
      />
    </section>
    <ContrastMeter contrast={contrast} />
    <ColorList palette={palette} openColorDetail={openColorDetail} />
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

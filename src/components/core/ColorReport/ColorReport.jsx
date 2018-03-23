import React from 'react';
import PropTypes from 'prop-types';

import {
  ContrastMeter,
  ColorList,
  PrimaryColorChart,
  HueAggregationChart,
} from 'components';

import s from './ColorReport.sass';

const ColorReport = ({
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
      <HueAggregationChart
        points={[
          {x: 50, y: 50, color: 'mediumseagreen'},
          {x: 5, y: 23, color: 'dodgerblue'},
          {x: 75, y: 75, color: 'orangered'},
        ]}
      />
    </section>
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
  primaryColor: PropTypes.shape({
    percentage: PropTypes.number,
    color: PropTypes.string,
  }).isRequired,
};

export default ColorReport;

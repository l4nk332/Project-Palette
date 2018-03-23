import React from 'react';
import PropTypes from 'prop-types';

import {Plot, SectionHeading} from 'components';

import s from './HueAggregationChart.sass';

const HueAggregationChart = ({points}) => (
  <section className={s.container}>
    <SectionHeading>Occurences by Hue</SectionHeading>
    <Plot
      width={100}
      height={100}
      points={points}
      showAxis
    />
  </section>
);

HueAggregationChart.propTypes = {
  points: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    color: PropTypes.string,
  })).isRequired,
};

export default HueAggregationChart;

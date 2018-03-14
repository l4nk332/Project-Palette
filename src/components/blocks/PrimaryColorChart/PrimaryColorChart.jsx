import React from 'react';
import PropTypes from 'prop-types';

import {Pie, Legend} from 'components';

const PrimaryColorChart = ({color, percentage}) => (
  <section>
    <Pie color={color} percentage={percentage} />
    <Legend fields={[{label: `${percentage}% Light`, color}]} />
  </section>
);

PrimaryColorChart.propTypes = {
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default PrimaryColorChart;

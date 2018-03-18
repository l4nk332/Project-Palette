import React from 'react';
import PropTypes from 'prop-types';

import {Pie, Legend, SectionHeading} from 'components';

import s from './PrimaryColorChart.sass';

const PrimaryColorChart = ({color, percentage}) => (
  <section className={s.container}>
    <SectionHeading>Most Frequent</SectionHeading>
    <Pie color={color} percentage={percentage} />
    <Legend fields={[{label: `${Math.round(percentage)}% ${color}`, color}]} />
  </section>
);

PrimaryColorChart.propTypes = {
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default PrimaryColorChart;

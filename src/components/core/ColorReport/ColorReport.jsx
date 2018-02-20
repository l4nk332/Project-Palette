import React from 'react';
import PropTypes from 'prop-types';

import { ProgressBar, Legend } from 'components';

import { BLACK, WHITE } from 'utils/constants';

import s from './ColorReport.sass';

const ColorReport = ({palette, colors, openColorDetail}) => (
  <section className={s.container}>
    <ProgressBar
      units={[
        {
          label: '50% Light',
          color: WHITE,
          percentage: 50,
        },
        {
          label: '50% Dark',
          color: BLACK,
          percentage: 50,
        },
      ]}
    />
    <Legend
      fields={[
        {label: '50% Light', color: WHITE},
        {label: '50% Dark', color: BLACK},
      ]}
    />
  </section>
);

ColorReport.propTypes = {
  palette: PropTypes.object.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  openColorDetail: PropTypes.func.isRequired,
};

export default ColorReport;

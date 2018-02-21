import React from 'react';
import PropTypes from 'prop-types';

import {ProgressBar, Legend} from 'components';

import {BLACK, WHITE} from 'utils/constants';

import s from './ColorReport.sass';

const ColorReport = ({contrast}) => (
  <section className={s.container}>
    <ProgressBar
      units={[
        {
          label: `${contrast.light}% Light`,
          color: WHITE,
          percentage: contrast.light,
        },
        {
          label: `${contrast.dark}% Dark`,
          color: BLACK,
          percentage: contrast.dark,
        },
      ]}
    />
    <Legend
      fields={[
        {label: `${contrast.light}% Light`, color: WHITE},
        {label: `${contrast.dark}% Dark`, color: BLACK},
      ]}
    />
  </section>
);

ColorReport.propTypes = {
  contrast: PropTypes.shape({
    light: PropTypes.number.isRequired,
    dark: PropTypes.number.isRequired,
  }).isRequired,
};

export default ColorReport;

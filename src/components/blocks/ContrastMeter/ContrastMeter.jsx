import React from 'react';
import PropTypes from 'prop-types';

import {ProgressBar, Legend, SectionHeading} from 'components';

import {BLACK, WHITE} from 'utils/constants';

import s from './ContrastMeter.sass';

const ContrastMeter = ({contrast}) => (
  <section className={s.container}>
    <SectionHeading>Contrast Meter</SectionHeading>
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

ContrastMeter.propTypes = {
  contrast: PropTypes.shape({
    light: PropTypes.number.isRequired,
    dark: PropTypes.number.isRequired,
  }).isRequired,
};

export default ContrastMeter;

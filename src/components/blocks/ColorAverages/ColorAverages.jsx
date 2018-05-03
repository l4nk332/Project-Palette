import React from 'react';
import PropTypes from 'prop-types';

import {SectionHeading, ProgressBar, Legend} from 'components';

import s from './ColorAverages.sass';

const ColorAverages = () => (
  <section>
    <SectionHeading>Averages</SectionHeading>
    <section className={s.averages}>
      <ProgressBar
        units={[
          {
            label: 'Medium Sea Green',
            color: 'mediumseagreen',
            percentage: 46,
          },
        ]}
        size="medium"
      />
      <Legend
        fields={[
          {label: '165 - Hue', color: 'mediumseagreen'},
        ]}
      />
      <ProgressBar
        units={[
          {
            label: 'Dodger Blue',
            color: 'dodgerblue',
            percentage: 87,
          },
        ]}
        size="medium"
      />
      <Legend
        fields={[
          {label: '87 - Saturation', color: 'dodgerblue'},
        ]}
      />
      <ProgressBar
        units={[
          {
            label: 'Orange Red',
            color: 'orangered',
            percentage: 56,
          },
        ]}
        size="medium"
      />
      <Legend
        fields={[
          {label: '56 - Lightness', color: 'orangered'},
        ]}
      />
    </section>
  </section>
);

ColorAverages.propTypes = {};

export default ColorAverages;

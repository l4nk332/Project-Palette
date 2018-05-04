import React from 'react';
import PropTypes from 'prop-types';

import {SectionHeading, ProgressBar, Lead} from 'components';

import s from './ColorAverages.sass';

const ColorAverages = () => (
  <section>
    <SectionHeading>Averages</SectionHeading>
    <section className={s.averages}>
      <Lead className={s.label}>Hue - 46</Lead>
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
      <Lead className={s.label}>Saturation - 87</Lead>
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
      <Lead className={s.label}>Lightness - 56</Lead>
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
    </section>
  </section>
);

ColorAverages.propTypes = {};

export default ColorAverages;

import React from 'react';
import PropTypes from 'prop-types';

import {SectionHeading, ProgressBar} from 'components';

import s from './ColorAverages.sass';

const ColorAverages = () => (
  <section>
    <SectionHeading>Averages</SectionHeading>
    <ProgressBar
      units={[
        {
          label: 'Medium Sea Green',
          color: 'mediumseagreen',
          percentage: 46,
        },
      ]}
    />
  </section>
);

ColorAverages.propTypes = {};

export default ColorAverages;

import React from 'react';
import PropTypes from 'prop-types';

import {toPercentage} from 'utils/color-manipulation';

import {SectionHeading, ProgressBar, Lead, KeyValue} from 'components';

import s from './ColorAverages.sass';

const ColorAverages = ({averages}) => (
  <section>
    <SectionHeading>Averages</SectionHeading>
    <section className={s.averages}>
      <Lead className={s.label}>
        <KeyValue label="Hue" value={averages.hue} />
      </Lead>
      <ProgressBar
        units={[
          {
            label: `Hue: ${averages.hue}`,
            color: `hsl(${averages.hue}, 50%, 50%)`,
            percentage: toPercentage(averages.hue, 360),
          },
        ]}
        size="medium"
      />
      <Lead className={s.label}>
        <KeyValue label="Saturation" value={`${averages.saturation}%`} />
      </Lead>
      <ProgressBar
        units={[
          {
            label: `Saturation: ${averages.saturation}%`,
            color: `hsl(${averages.hue}, ${averages.saturation}%, 50%)`,
            percentage: averages.saturation,
          },
        ]}
        size="medium"
      />
      <Lead className={s.label}>
        <KeyValue label="Lightness" value={`${averages.lightness}%`} />
      </Lead>
      <ProgressBar
        units={[
          {
            label: `Lightness: ${averages.lightness}%`,
            color: `hsl(${averages.hue}, 50%, ${averages.lightness}%)`,
            percentage: averages.lightness,
          },
        ]}
        size="medium"
      />
      <Lead className={s.label}>
        <KeyValue label="Alpha" value={`${averages.alpha}%`} />
      </Lead>
      <ProgressBar
        units={[
          {
            label: `Alpha: ${averages.alpha}`,
            color: `hsla(${averages.hue}, 50%, 50%, ${averages.alpha})`,
            percentage: toPercentage(averages.alpha, 1),
          },
        ]}
        size="medium"
      />
    </section>
  </section>
);

ColorAverages.propTypes = {
  averages: PropTypes.shape({
    hue: PropTypes.number,
    saturation: PropTypes.number,
    lightness: PropTypes.number,
    alpha: PropTypes.number,
  }).isRequired,
};

export default ColorAverages;

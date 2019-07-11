import React from 'react';
import PropTypes from 'prop-types';
import partial from 'lodash/partial';

import {getTextColor} from 'utils/color-manipulation';
import {triggerIfEnterKey} from 'utils/misc';

import s from './ColorSwatch.sass';


const ColorSwatch = ({color, openColorDetail}) => {
  const normalizedColor = color.toLowerCase();
  const appliedDetailOpen = partial(openColorDetail, color);

  return (
    <div
      style={{backgroundColor: normalizedColor}}
      className={s.container}
      onClick={appliedDetailOpen}
      onKeyDown={event => {
        triggerIfEnterKey(event, appliedDetailOpen);
      }}
      tabIndex="0"
      role="button"
    >
      <span
        style={{color: getTextColor(normalizedColor)}}
        className={s.text}
        title={normalizedColor}
      >
        {normalizedColor}
      </span>
    </div>
  );
};

ColorSwatch.propTypes = {
  color: PropTypes.string.isRequired,
  openColorDetail: PropTypes.func.isRequired,
};

export default ColorSwatch;

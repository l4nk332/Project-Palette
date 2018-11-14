import React from 'react';
import PropTypes from 'prop-types';

import {getTextColor} from 'utils/color-manipulation';
import {triggerIfEnterKey} from 'utils/misc';

import s from './ColorSwatch.sass';


const ColorSwatch = ({color, openColorDetail}) => {
  const normalizedColor = color.toLowerCase();

  return (
    <div
      style={{backgroundColor: normalizedColor}}
      className={s.container}
      onClick={() => { openColorDetail(color); }}
      onKeyDown={event => {
        triggerIfEnterKey(event, openColorDetail);
      }}
      tabIndex="0"
      role="button"
    >
      <span style={{color: getTextColor(normalizedColor)}}>
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

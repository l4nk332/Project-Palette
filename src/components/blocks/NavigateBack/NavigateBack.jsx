import React from 'react';
import PropTypes from 'prop-types';

import ArrowBack from 'react-icons/lib/md/arrow-back';

import {triggerIfEnterKey} from 'utils/misc';

import s from './NavigateBack.sass';

const NavigateBack = ({text, clickHandler}) => (
  <h1
    className={s.container}
    onClick={clickHandler}
    onKeyDown={event => {
      triggerIfEnterKey(event, clickHandler);
    }}
  >
    <ArrowBack style={{margin: '0.09em 0.45em 0 0', verticalAlign: 'top'}} />
    {text}
  </h1>
);

NavigateBack.defaultProps = {
  text: '',
};

NavigateBack.propTypes = {
  text: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

export default NavigateBack;

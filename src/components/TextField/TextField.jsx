import React from 'react';
import PropTypes from 'prop-types';

import {triggerIfEnterKey} from '../../utils/misc';

import s from './TextField.sass';

const TextField = ({
  placeholderText,
  value,
  enterKeyHandler,
  changeHandler,
  focusHandler,
}) => (
  <input
    className={s.container}
    type="text"
    placeholder={placeholderText}
    value={value}
    onKeyDown={event => {
      triggerIfEnterKey(event, enterKeyHandler);
    }}
    onChange={changeHandler}
    onFocus={focusHandler}
  />
);

TextField.defaultProps = {
  placeholderText: '',
  value: '',
  enterKeyHandler: () => {},
  changeHandler: () => {},
  focusHandler: () => {},
};

TextField.propTypes = {
  placeholderText: PropTypes.string,
  value: PropTypes.string,
  enterKeyHandler: PropTypes.func,
  changeHandler: PropTypes.func,
  focusHandler: PropTypes.func,
};

export default TextField;

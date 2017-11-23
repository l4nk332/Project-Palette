import React from 'react';
import PropTypes from 'prop-types';

import {triggerIfEnterKey} from '../../utils/misc';

import './TextField.sass';

const TextField = ({
  placeholderText,
  value,
  enterKeyHandler,
  changeHandler,
}) => (
  <input
    type="text"
    placeholder={placeholderText}
    value={value}
    onKeyDown={event => {
      triggerIfEnterKey(event, enterKeyHandler);
    }}
    onChange={changeHandler}
  />
);

TextField.defaultProps = {
  placeholderText: '',
  value: '',
  enterKeyHandler: () => {},
  changeHandler: () => {},
};

TextField.propTypes = {
  placeholderText: PropTypes.string,
  value: PropTypes.string,
  enterKeyHandler: PropTypes.func,
  changeHandler: PropTypes.func,
};

export default TextField;

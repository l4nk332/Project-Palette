import React from 'react';
import PropTypes from 'prop-types';

import {triggerIfEnterKey} from '../../utils/misc';

import './TextField.sass';

const TextField = ({placeholderText, enterKeyHandler, changeHandler}) => (
  <input
    type="text"
    placeholder={placeholderText}
    onKeyDown={event => {
      triggerIfEnterKey(event, enterKeyHandler);
    }}
    onChange={changeHandler}
  />
);

TextField.defaultProps = {
  placeholderText: '',
  enterKeyHandler: () => {},
  changeHandler: () => {},
};

TextField.propTypes = {
  placeholderText: PropTypes.string,
  enterKeyHandler: PropTypes.func,
  changeHandler: PropTypes.func,
};

export default TextField;

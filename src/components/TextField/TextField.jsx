import React from 'react';
import PropTypes from 'prop-types';

import {triggerIfEnterKey} from '../../utils/misc';

import './TextField.sass';

const TextField = ({placeholderText, enterKeyHandler, keyUpHandler}) => (
  <input
    type="text"
    placeholder={placeholderText}
    onKeyDown={event => {
      triggerIfEnterKey(event, enterKeyHandler);
    }}
    onKeyUp={keyUpHandler}
  />
);

TextField.defaultProps = {
  placeholderText: '',
  enterKeyHandler: () => {},
  keyUpHandler: () => {},
};

TextField.propTypes = {
  placeholderText: PropTypes.string,
  enterKeyHandler: PropTypes.func,
  keyUpHandler: PropTypes.func,
};

export default TextField;

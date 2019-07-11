import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import {triggerIfEnterKey} from 'utils/misc';

import s from './TextField.sass';

const TextField = ({
  placeholderText,
  value,
  enterKeyHandler,
  changeHandler,
  focusHandler,
  scalesDown,
  style,
  className,
}) => (
  <input
    className={classNames(scalesDown ? s.scalesDown : s.container, {[className]: className})}
    style={style}
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
  scalesDown: false,
  style: {},
  className: '',
};

TextField.propTypes = {
  placeholderText: PropTypes.string,
  value: PropTypes.string,
  enterKeyHandler: PropTypes.func,
  changeHandler: PropTypes.func,
  focusHandler: PropTypes.func,
  scalesDown: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default TextField;

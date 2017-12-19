import React from 'react';
import PropTypes from 'prop-types';

import s from './Button.sass';

const Button = ({clickHandler, isDisabled, children}) => (
  <button onClick={clickHandler} disabled={isDisabled} className={s.button}>
    {children}
  </button>
);

Button.defaultProps = {
  clickHandler: event => event.preventDefault(),
  isDisabled: false,
  children: null,
};

Button.propTypes = {
  clickHandler: PropTypes.func,
  isDisabled: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({clickHandler, isDisabled, children}) => (
  <button onClick={clickHandler} disabled={isDisabled}>
    {children}
  </button>
);

Button.defaultProps = {
  clickHandler: e => { e.preventDefault(); },
  isDisabled: false,
};

Button.propTypes = {
  clickHandler: PropTypes.func,
  isDisabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;

import React from 'react';

const Button = ({clickHandler, isDisabled, children}) => (
  <button onClick={clickHandler} disabled={isDisabled}>
    {children}
  </button>
);

export default Button;

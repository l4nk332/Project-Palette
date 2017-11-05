import React from 'react';
import TiTimes from 'react-icons/lib/ti/times';

import './CloseIcon.sass';

const CloseIcon = ({handleClick}) => (
  <TiTimes
    className="CloseIcon"
    onClick={() => {
      handleClick();
    }}
  />
);

export default CloseIcon;

import React from 'react';
import PropTypes from 'prop-types';
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

CloseIcon.defaultProps = {
  handleClick: e => { e.preventDefault(); },
};

CloseIcon.propTypes = {
  handleClick: PropTypes.func,
};

export default CloseIcon;

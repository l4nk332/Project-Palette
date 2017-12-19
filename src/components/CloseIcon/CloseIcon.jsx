import React from 'react';
import PropTypes from 'prop-types';
import TiTimes from 'react-icons/lib/ti/times';

import s from './CloseIcon.sass';

const CloseIcon = ({handleClick}) => (
  <TiTimes
    className={s.icon}
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

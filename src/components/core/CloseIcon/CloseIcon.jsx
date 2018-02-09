import React from 'react';
import PropTypes from 'prop-types';
import XIcon from 'react-icons/lib/md/close';

import s from './CloseIcon.sass';

const CloseIcon = ({handleClick}) => (
  <XIcon
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

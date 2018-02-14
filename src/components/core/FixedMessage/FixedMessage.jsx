import React from 'react';
import PropTypes from 'prop-types';

import s from './FixedMessage.sass';

const FixedMessage = ({children}) => (
  <h3 className={s.container}>{children}</h3>
);

FixedMessage.defaultProps = {
  children: null,
};

FixedMessage.propTypes = {
  children: PropTypes.node,
};

export default FixedMessage;

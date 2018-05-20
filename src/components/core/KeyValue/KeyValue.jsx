import React from 'react';
import PropTypes from 'prop-types';

import s from './KeyValue.sass';

const KeyValue = ({label, value}) => (
  <span className={s.container}>
    {label}
    <span className={s.value}>{value}</span>
  </span>
);

KeyValue.propTypes = {
  label: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
};

export default KeyValue;

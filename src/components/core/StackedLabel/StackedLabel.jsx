import React from 'react';
import PropTypes from 'prop-types';

import s from './StackedLabel.sass';

const StackedLabel = ({label, children}) => (
  <section className={s.container}>
    <span className={s.label}>{label}</span>
    {children}
  </section>
);

StackedLabel.propTypes = {
  label: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default StackedLabel;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import s from './Lead.sass';

const Lead = ({children, className}) => (
  <p
    className={classNames(s.container, {[className]: className})}
  >
    {children}
  </p>
);

Lead.defaultProps = {
  children: '',
  className: '',
};

Lead.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Lead;

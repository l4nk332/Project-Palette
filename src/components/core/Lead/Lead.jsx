import React from 'react';
import PropTypes from 'prop-types';

import s from './Lead.sass';

const Lead = ({children}) => <p className={s.container}>{children}</p>;

Lead.defaultProps = {
  children: '',
};

Lead.propTypes = {
  children: PropTypes.node,
};

export default Lead;

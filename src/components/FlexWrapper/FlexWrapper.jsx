import React from 'react';
import PropTypes from 'prop-types';

import s from './FlexWrapper.sass';

const FlexWrapper = ({children}) => (
  <div className={s.container}>{children}</div>
);

FlexWrapper.defaultProps = {
  children: null,
};

FlexWrapper.propTypes = {
  children: PropTypes.node,
};

export default FlexWrapper;

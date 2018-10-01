import React from 'react';
import PropTypes from 'prop-types';

import s from './Title.sass';

const Title = ({children, style}) => (
  <h1 className={s.container} style={style}>{children}</h1>
);

Title.defaultProps = {
  children: '',
  style: {},
};

Title.propTypes = {
  children: PropTypes.string,
  style: PropTypes.object,
};

export default Title;

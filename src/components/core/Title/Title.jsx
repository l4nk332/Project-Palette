import React from 'react';
import PropTypes from 'prop-types';

import s from './Title.sass';

const Title = ({children}) => <h1 className={s.container}>{children}</h1>;

Title.defaultProps = {
  children: '',
};

Title.propTypes = {
  children: PropTypes.string,
};

export default Title;

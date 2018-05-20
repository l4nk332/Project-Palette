import React from 'react';
import PropTypes from 'prop-types';

import s from './FadeWrapper.sass';


const FadeWrapper = ({children}) => (
  <section className={s.container}>{children}</section>
);

FadeWrapper.defaultProps = {
  children: null,
};

FadeWrapper.propTypes = {
  children: PropTypes.node,
};

export default FadeWrapper;

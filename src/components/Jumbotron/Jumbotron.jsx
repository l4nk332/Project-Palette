import React from 'react';
import PropTypes from 'prop-types';

import Title from '../Title/Title';
import Lead from '../Lead/Lead';

import s from './Jumbotron.sass';

const Jumbotron = ({title, children}) => (
  <div className={s.container}>
    <Title>{title}</Title>
    <Lead>{children}</Lead>
  </div>
);

Jumbotron.defaultProps = {
  title: '',
  children: '',
};

Jumbotron.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Jumbotron;

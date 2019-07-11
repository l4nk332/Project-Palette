import React from 'react';
import PropTypes from 'prop-types';

import {Title, Lead} from 'components';

import s from './Jumbotron.sass';

const Jumbotron = ({title, children}) => (
  <div className={s.container}>
    <Title style={{fontWeight: '200', fontSize: '4.9em'}}>{title}</Title>
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

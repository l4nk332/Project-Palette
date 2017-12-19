import React from 'react';
import PropTypes from 'prop-types';
import s from './Grid.sass';

const Grid = ({children}) => <div className={s.container}>{children}</div>;

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;

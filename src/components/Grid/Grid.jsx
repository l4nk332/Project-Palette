import React from 'react';
import PropTypes from 'prop-types';
import './Grid.sass';

const Grid = ({children}) => <div className="grid">{children}</div>;

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;

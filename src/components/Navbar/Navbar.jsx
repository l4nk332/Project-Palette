import React from 'react';
import PropTypes from 'prop-types';

import './Navbar.sass';

const Navbar = ({children}) => <nav className="navbar">{children}</nav>;

Navbar.defaultProps = {
  children: null,
};

Navbar.propTypes = {
  children: PropTypes.node,
};

export default Navbar;

import React from 'react';
import PropTypes from 'prop-types';

import s from './Navbar.sass';

const Navbar = ({children}) => <nav className={s.container}>{children}</nav>;

Navbar.defaultProps = {
  children: null,
};

Navbar.propTypes = {
  children: PropTypes.node,
};

export default Navbar;

import React from 'react';
import PropTypes from 'prop-types';

import s from './Heading.sass';

const Heading = ({children}) => <h3 className={s.container}>{children}</h3>;

Heading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Heading;

import React from 'react';
import PropTypes from 'prop-types';

import './Heading.sass';

const Heading = ({children}) => <h3 className="Heading">{children}</h3>;

Heading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Heading;

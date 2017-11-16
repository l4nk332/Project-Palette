import React from 'react';
import PropTypes from 'prop-types';

import './Paragraph.sass';

const Paragraph = ({children}) => <p className="paragraph">{children}</p>;

Paragraph.defaultProps = {
  children: null,
};

Paragraph.propTypes = {
  children: PropTypes.node,
};

export default Paragraph;

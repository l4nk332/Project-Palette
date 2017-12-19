import React from 'react';
import PropTypes from 'prop-types';

import s from './Paragraph.sass';

const Paragraph = ({children}) => <p className={s.container}>{children}</p>;

Paragraph.defaultProps = {
  children: null,
};

Paragraph.propTypes = {
  children: PropTypes.node,
};

export default Paragraph;

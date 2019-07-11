import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import s from './Paragraph.sass';

const Paragraph = ({children, className}) => (
  <p className={classNames(s.container, className)}>{children}</p>
);

Paragraph.defaultProps = {
  children: null,
  className: '',
};

Paragraph.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Paragraph;

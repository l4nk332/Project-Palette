import React from 'react';
import PropTypes from 'prop-types';

import './Anchor.sass';

const Anchor = ({url, children}) => (
  <a href={url} target="_blank" className="anchor">{children}</a>
);

Anchor.defaultProps = {
  url: '',
  children: null,
};

Anchor.propTypes = {
  url: PropTypes.string,
  children: PropTypes.node,
};

export default Anchor;

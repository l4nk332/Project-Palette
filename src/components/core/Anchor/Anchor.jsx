import React from 'react';
import PropTypes from 'prop-types';


const Anchor = ({url, children}) => (
  url
    ? <a href={url} target="_blank">{children}</a>
    : <span>{children}</span>
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

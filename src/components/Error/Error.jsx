import React from 'react';
import PropTypes from 'prop-types';

import './Error.sass';

const Error = ({heading, message, link}) => (
  <section className="error__container">
    <h1 className="error__heading">{heading}</h1>
    <hr className="error__rule" />
    <p className="error__message">{message}</p>
    <p className="error__message">{link}</p>
  </section>
);

Error.defaultProps = {
  heading: '',
  message: '',
  link: null,
};

Error.propTypes = {
  heading: PropTypes.string,
  message: PropTypes.string,
  link: PropTypes.node,
};

export default Error;

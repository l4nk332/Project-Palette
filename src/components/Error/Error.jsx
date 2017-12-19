import React from 'react';
import PropTypes from 'prop-types';

import s from './Error.sass';

const Error = ({heading, message, link}) => (
  <section className={s.container}>
    <h1 className={s.heading}>{heading}</h1>
    <hr className={s.rule} />
    <p className={s.message}>{message}</p>
    <p className={s.message}>{link}</p>
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

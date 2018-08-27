import React from 'react';
import PropTypes from 'prop-types';

import {triggerIfEnterKey, updatePageTitle} from 'utils/misc';

import s from './Error.sass';

const Error = ({
  heading,
  message,
  link,
  clickHandler,
}) => {
  updatePageTitle(`Error ∙ ${heading}`);

  return (
    <section className={s.container}>
      <h1 className={s.heading}>{heading}</h1>
      <hr className={s.rule} />
      <p className={s.message}>{message}</p>
      <p
        className={s.message}
        onClick={clickHandler}
        onKeyDown={event => {
          triggerIfEnterKey(event, clickHandler);
        }}
      >
        {link}
      </p>
    </section>
  );
};

Error.defaultProps = {
  heading: '',
  message: '',
  link: null,
  clickHandler: () => {},
};

Error.propTypes = {
  heading: PropTypes.string,
  message: PropTypes.string,
  link: PropTypes.node,
  clickHandler: PropTypes.func,
};

export default Error;

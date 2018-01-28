import React from 'react';
import PropTypes from 'prop-types';

import s from './IconAssistedField.sass';

const IconAssistedField = ({Field, Icon}) => (
  <section className={s.container}>
    {Field}
    <figure className={s.icon}>
      {Icon}
    </figure>
  </section>
);

IconAssistedField.defaultProps = {
  Field: null,
  Icon: null,
};

IconAssistedField.propTypes = {
  Field: PropTypes.element,
  Icon: PropTypes.element,
};

export default IconAssistedField;

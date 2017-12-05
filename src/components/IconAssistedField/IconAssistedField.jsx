import React from 'react';
import PropTypes from 'prop-types';

import './IconAssistedField.sass';

const IconAssistedField = ({Field, Icon}) => (
  <section className="assisted_field_container">
    {Field}
    <figure className="assisted_field_icon">
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

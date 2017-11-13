import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import './Form.sass';

const Form = ({fields}) => (
  <form className="form">
    {fields.map(field => (
      <section className="form-field" key={shortid.generate()}>
        {field.label && <label>{field.label}</label>}
        {field.content}
      </section>
    ))}
  </form>
);

Form.defaultProps = {
  fields: [],
};

Form.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    content: PropTypes.node,
  })),
};

export default Form;

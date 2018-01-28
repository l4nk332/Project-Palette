import React from 'react';
import PropTypes from 'prop-types';

import s from './Form.sass';

const Form = ({fields}) => (
  <form className={s.container}>
    {fields.map((field, idx) => (
      <section
        className={s.field}
        style={field.isHidden ? {display: 'none'} : {}}
        key={idx}
      >
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

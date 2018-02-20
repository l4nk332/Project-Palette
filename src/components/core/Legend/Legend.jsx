import React from 'react';
import PropTypes from 'prop-types';

import s from './Legend.sass';

const Legend = ({fields}) => (
  <section className={s.container}>
    {fields.map((field, key) => (
      <section className={s.field} key={key}>
        <span className={s.color} style={{backgroundColor: field.color}} />
        <span className={s.label}>{field.label}</span>
      </section>
    ))}
  </section>
);

Legend.defaultProps = {
  fields: [],
};

Legend.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    color: PropTypes.string,
  })),
};

export default Legend;

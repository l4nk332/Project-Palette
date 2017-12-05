import React from 'react';
import PropTypes from 'prop-types';

import TiArrowDown from 'react-icons/lib/ti/arrow-sorted-down';

import {triggerIfEnterKey} from '../../utils/misc';

import './SelectField.sass';

const SelectField = ({
  values,
  placeholder,
  clickHandler,
  width,
}) => (
  <section className="select_container" style={{width}}>
    <header className="select_header">
      <span className="select_muted">{placeholder}</span>
      <span className="select_muted">
        <TiArrowDown />
      </span>
    </header>
    <ul className="select_list">
      {values.map((value, idx) => (
        <li
          role="button"
          tabIndex="0"
          key={idx}
          onClick={() => {
            clickHandler(value.value);
          }}
          onKeyDown={event => {
            triggerIfEnterKey(event, clickHandler(value.value));
          }}
        >
          {value.label}
        </li>
      ))}
    </ul>
  </section>
);

SelectField.defaultProps = {
  values: [],
  placeholder: '',
  clickHandler: e => e.preventDefault(),
  width: '85px',
};

SelectField.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      selected: PropTypes.bool,
    }),
  ),
  placeholder: PropTypes.string,
  clickHandler: PropTypes.func,
  width: PropTypes.string,
};

export default SelectField;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TiArrowDown from 'react-icons/lib/ti/arrow-sorted-down';
import TiArrowUp from 'react-icons/lib/ti/arrow-sorted-up';

import {triggerIfEnterKey} from 'utils/misc';

import s from './SelectField.sass';

const SelectField = ({
  width,
  isOpen,
  values,
  toggleDropdown,
  setRef,
  selectedLabel,
  selectHandler,
}) => (
  <section
    className={s.container}
    style={{width}}
  >
    <header
      role="button"
      tabIndex="0"
      className={classNames(s.header, {
        [s.open]: isOpen,
      })}
      onClick={toggleDropdown}
      onKeyDown={event => {
        triggerIfEnterKey(event, () => {
          toggleDropdown();
        });
      }}
    >
      <span className={s.muted}>{selectedLabel}</span>
      <span className={s.muted}>
        {isOpen ? <TiArrowUp /> : <TiArrowDown />}
      </span>
    </header>
    {isOpen && (
      <ul
        className={classNames(s.list, {
          [s.open]: isOpen,
        })}
        ref={setRef}
      >
        {values.map((value, idx) => (
          <li
            role="button"
            tabIndex="0"
            key={idx}
            className={classNames({
              [s.selected]: value.label === selectedLabel,
            })}
            onMouseDown={() => {
              selectHandler(value);
            }}
            onKeyDown={event => {
              triggerIfEnterKey(event, () => {
                selectHandler(value);
              });
            }}
          >
            {value.label}
          </li>
        ))}
      </ul>
    )}
  </section>
);

SelectField.defaultProps = {
  isOpen: false,
  selectedLabel: null,
};

SelectField.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      selected: PropTypes.bool,
    }),
  ).isRequired,
  width: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  selectedLabel: PropTypes.string,
  toggleDropdown: PropTypes.func.isRequired,
  setRef: PropTypes.func.isRequired,
  selectHandler: PropTypes.func.isRequired,
};

export default SelectField;

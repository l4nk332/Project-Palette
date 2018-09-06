import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TiArrowDown from 'react-icons/lib/ti/arrow-sorted-down';
import TiArrowUp from 'react-icons/lib/ti/arrow-sorted-up';

import {OutsideClickContainer} from 'containers';

import {triggerIfEnterKey} from 'utils/misc';

import s from './SelectField.sass';

const SelectField = ({
  width,
  isOpen,
  values,
  openDropdown,
  closeDropdown,
  setRef,
  selectedLabel,
  selectHandler,
}) => (
  <OutsideClickContainer onOutsideClick={closeDropdown}>
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
        onClick={isOpen ? closeDropdown : openDropdown}
        onKeyDown={event => {
          triggerIfEnterKey(
            event,
            isOpen ? closeDropdown : openDropdown,
          );
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
  </OutsideClickContainer>
);

SelectField.defaultProps = {
  isOpen: false,
  selectedLabel: null,
  setRef: null,
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
  openDropdown: PropTypes.func.isRequired,
  closeDropdown: PropTypes.func.isRequired,
  setRef: PropTypes.func,
  selectHandler: PropTypes.func.isRequired,
};

export default SelectField;

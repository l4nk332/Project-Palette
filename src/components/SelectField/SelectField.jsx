import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TiArrowDown from 'react-icons/lib/ti/arrow-sorted-down';
import TiArrowUp from 'react-icons/lib/ti/arrow-sorted-up';

import {triggerIfEnterKey} from '../../utils/misc';

import s from './SelectField.sass';

class SelectField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selectedLabel: null,
    };
  }

  setSelectedLabel = label => {
    this.setState({
      selectedLabel: label,
    });
  };

  toggleDropdown = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  closeDropdown = () => {
    this.setState({
      isOpen: false,
    });
  };

  openDropdown = () => {
    this.setState({
      isOpen: true,
    });
  };

  handleBlur = event => {
    const {currentTarget} = event;

    // This setTimeout is necessary because the element won't be
    // focused as the blur event happens, which will cause bubbling up
    // to occur.
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        this.closeDropdown();
      }
    }, 0);
  }

  render() {
    return (
      <section
        className={s.container}
        style={{width: this.props.width}}
        onBlur={this.handleBlur}
      >
        <header
          role="button"
          tabIndex="0"
          className={classNames(s.header, {
            [s.open]: this.state.isOpen,
          })}
          onMouseDown={() => {
            this.toggleDropdown();
          }}
          onKeyDown={event => {
            triggerIfEnterKey(event, () => {
              this.toggleDropdown();
            });
          }}
        >
          <span className={s.muted}>
            {this.state.selectedLabel
              ? this.state.selectedLabel
              : this.props.placeholder}
          </span>
          <span className={s.muted}>
            {this.state.isOpen ? <TiArrowUp /> : <TiArrowDown />}
          </span>
        </header>
        <ul
          className={classNames(s.list, {
            [s.open]: this.state.isOpen,
          })}
        >
          {this.props.values.map((value, idx) => (
            <li
              role="button"
              tabIndex="0"
              key={idx}
              className={classNames({
                [s.selected]: value.label === this.state.selectedLabel,
              })}
              onMouseDown={() => {
                this.props.clickHandler(value.value);
                this.setSelectedLabel(value.label);
                this.closeDropdown();
              }}
              onKeyDown={event => {
                triggerIfEnterKey(event, () => {
                  this.props.clickHandler(value.value);
                  this.setSelectedLabel(value.label);
                  this.closeDropdown();
                });
              }}
            >
              {value.label}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

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

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TiArrowDown from 'react-icons/lib/ti/arrow-sorted-down';
import TiArrowUp from 'react-icons/lib/ti/arrow-sorted-up';

import {triggerIfEnterKey} from 'utils/misc';

import s from './SelectField.sass';

class SelectField extends React.Component {
  constructor(props) {
    super(props);

    const selectedItem = this.props.values.filter(item => item.selected)[0];

    this.state = {
      isOpen: false,
      selectedLabel: selectedItem ? selectedItem.label : null,
    };
  }

  componentDidMount = () => {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef = node => {
    this.wrapperRef = node;
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

  handleClickOutside = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.closeDropdown();
    }
  }

  render() {
    return (
      <section
        className={s.container}
        style={{width: this.props.width}}
      >
        <header
          role="button"
          tabIndex="0"
          className={classNames(s.header, {
            [s.open]: this.state.isOpen,
          })}
          onClick={() => {
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
        {this.state.isOpen && (
          <ul
            className={classNames(s.list, {
              [s.open]: this.state.isOpen,
            })}
            ref={this.setWrapperRef}
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
        )}
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

import React from 'react';
import PropTypes from 'prop-types';

import {SelectField} from 'components';

class SelectFieldContainer extends React.Component {
  static propTypes = {
    values: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        selected: PropTypes.bool,
      }),
    ),
    width: PropTypes.string,
    placeholder: PropTypes.string,
    clickHandler: PropTypes.func,
  };

  static defaultProps = {
    values: [],
    width: '85px',
    placeholder: '',
    clickHandler: e => e.preventDefault(),
  };

  state = {
    isOpen: false,
    selectedLabel: (this.props.values.filter(item => item.selected)[0] ?
      this.props.values.filter(item => item.selected)[0].label : null),
  };

  componentDidMount = () => {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillReceiveProps = nextProps => {
    const selectedItem = nextProps.values.filter(item => item.selected)[0];

    this.setState({
      selectedLabel: selectedItem ? selectedItem.label : null,
    });
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

  handleSelection = value => {
    this.props.clickHandler(value.value);
    this.setSelectedLabel(value.label);
    this.closeDropdown();
  }

  render = () => (
    <SelectField
      width={this.props.width}
      values={this.props.values}
      isOpen={this.state.isOpen}
      selectedLabel={
        this.state.selectedLabel
        ? this.state.selectedLabel
        : this.props.placeholder
      }
      toggleDropdown={this.toggleDropdown}
      setRef={this.setWrapperRef}
      selectHandler={this.handleSelection}
    />
  )
}

export default SelectFieldContainer;

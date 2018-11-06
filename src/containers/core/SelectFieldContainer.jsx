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
  };

  getSelectedLabel = () => {
    const item = this.props.values.find(item => item.selected);
    return item ? item.label : this.props.placeholder;
  }

  openDropdown = () => {
    this.setState({isOpen: true});
  };

  closeDropdown = () => {
    this.setState({isOpen: false});
  };

  handleSelection = value => {
    this.props.clickHandler(value.value);
    this.closeDropdown();
  }

  render = () => (
    <SelectField
      width={this.props.width}
      values={this.props.values}
      isOpen={this.state.isOpen}
      selectedLabel={this.getSelectedLabel()}
      openDropdown={this.openDropdown}
      closeDropdown={this.closeDropdown}
      selectHandler={this.handleSelection}
    />
  )
}

export default SelectFieldContainer;

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {updateFilterText} from 'redux/actionCreators';

import {TextField, DecoratedField} from 'components';


class PaletteSearchContainer extends React.Component {
  static propTypes = {
    updateFilterText: PropTypes.func.isRequired,
    filterText: PropTypes.string,
  }

  static defaultProps = {
    filterText: '',
  }

  handleChange = event => {
    const {value} = event.target;
    this.props.updateFilterText(value);
  }

  clearSearch = () => {
    this.props.updateFilterText('');
  }

  render = () => (
    <DecoratedField
      Field={
        <TextField
          placeholderText="Search Palette..."
          value={this.props.filterText}
          changeHandler={this.handleChange}
          focusHandler={this.clearSearch}
          scalesDown
        />
      }
      Icon={null}
      label="Search"
    />
  )
}

const mapStateToProps = state => ({filterText: state.filters.filterText});

const mapDispatchToProps = {updateFilterText};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PaletteSearchContainer),
);

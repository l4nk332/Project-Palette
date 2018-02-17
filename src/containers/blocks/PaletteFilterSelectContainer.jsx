import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {
  updateFilterSelect,
  enableFilterSelect,
  disableFilterSelect,
} from 'redux/actionCreators';

import {PaletteFilterSelect} from 'components';


class PaletteSortSelectContainer extends React.Component {
  static defaultProps = {
    filterBy: null,
  }

  static propTypes = {
    filterBy: PropTypes.string,
    updateFilterSelect: PropTypes.func.isRequired,
    filterByEnabled: PropTypes.bool.isRequired,
    disableFilterSelect: PropTypes.func.isRequired,
    enableFilterSelect: PropTypes.func.isRequired,
  }

  toggleFilter = () => {
    if (this.props.filterByEnabled) {
      this.props.disableFilterSelect();
    } else {
      this.props.enableFilterSelect(this.props.filterBy);
    }
  }

  render = () => (
    <PaletteFilterSelect
      filterBy={this.props.filterBy}
      updateFilterSelect={this.props.updateFilterSelect}
      filterByEnabled={this.props.filterByEnabled}
      toggleFilter={this.toggleFilter}
    />
  )
}

const mapStateToProps = state => ({
  filterBy: state.filters.filterBy,
  filterByEnabled: state.filters.filterByEnabled,
});

const mapDispatchToProps = {
  updateFilterSelect,
  enableFilterSelect,
  disableFilterSelect,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PaletteSortSelectContainer),
);

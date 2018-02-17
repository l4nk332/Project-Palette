import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {
  updateSortSelect,
  updateSortOrder,
} from 'redux/actionCreators';

import {
  USAGE,
  BRIGHTNESS,
  LUMINESCENCE,
  ALPHABETICAL,
  TRANSPARENCY,
  HUE,
  ASCENDING,
  DESCENDING,
} from 'utils/constants';

import {PaletteSortSelect} from 'components';


class PaletteSortSelectContainer extends React.Component {
  static propTypes = {
    updateSortSelect: PropTypes.func.isRequired,
    updateSortOrder: PropTypes.func.isRequired,
    sortOrder: PropTypes.oneOf([ASCENDING, DESCENDING]).isRequired,
    sortBy: PropTypes.oneOf([
      USAGE,
      BRIGHTNESS,
      LUMINESCENCE,
      TRANSPARENCY,
      HUE,
      ALPHABETICAL,
    ]).isRequired,
  }

  setSortOrderDesc = () => {
    this.props.updateSortOrder(DESCENDING);
  }

  setSortOrderAsc = () => {
    this.props.updateSortOrder(ASCENDING);
  }

  render = () => (
    <PaletteSortSelect
      sortBy={this.props.sortBy}
      sortOrder={this.props.sortOrder}
      updateSortSelect={this.props.updateSortSelect}
      setSortOrderAsc={this.setSortOrderAsc}
      setSortOrderDesc={this.setSortOrderDesc}
    />
  )
}

const mapStateToProps = state => ({
  sortBy: state.sort.sortBy,
  sortOrder: state.sort.sortOrder,
});

const mapDispatchToProps = {
  updateSortSelect,
  updateSortOrder,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PaletteSortSelectContainer),
);

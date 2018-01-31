import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import tinycolor from 'tinycolor2';
import lodashSortBy from 'lodash/sortBy';

import {
  asyncFetchColorPalette,
  updateFilterText,
  updateFilterSelect,
  enableFilterSelect,
  disableFilterSelect,
  updateSortSelect,
  updateSortOrder,
  openColorDetail,
} from 'redux/actionCreators';

import {
  USAGE,
  BRIGHTNESS,
  LUMINESCENCE,
  ALPHABETICAL,
  TRANSPARENCY,
  LIGHTNESS,
  DARKNESS,
  ASCENDING,
  DESCENDING,
} from 'utils/constants';

import {Palette} from 'components';


class PaletteContainer extends React.Component {
  static defaultProps = {
    colorDetail: null,
    filterText: '',
    filterBy: null,
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        name: PropTypes.string,
        project: PropTypes.string,
      }),
    }).isRequired,
    asyncFetchColorPalette: PropTypes.func.isRequired,
    updateFilterText: PropTypes.func.isRequired,
    updateFilterSelect: PropTypes.func.isRequired,
    enableFilterSelect: PropTypes.func.isRequired,
    disableFilterSelect: PropTypes.func.isRequired,
    updateSortSelect: PropTypes.func.isRequired,
    updateSortOrder: PropTypes.func.isRequired,
    palette: PropTypes.object.isRequired,
    colorDetail: PropTypes.string,
    filterText: PropTypes.string,
    filterBy: PropTypes.string,
    filterByEnabled: PropTypes.bool.isRequired,
    sortOrder: PropTypes.oneOf([ASCENDING, DESCENDING]).isRequired,
    sortBy: PropTypes.oneOf([
      USAGE,
      BRIGHTNESS,
      LUMINESCENCE,
      TRANSPARENCY,
      ALPHABETICAL,
    ]).isRequired,
    openColorDetail: PropTypes.func.isRequired,
  }

  state = {popUpOpen: false}

  componentDidMount = () => {
    const {name, project} = this.props.match.params;
    if (name && project) {
      this.props.asyncFetchColorPalette(`${name}/${project}`);

      const queryParams = new URLSearchParams(window.location.search);

      this.setFiltersByUrlQuery(queryParams);
      this.setSortByUrlQuery(queryParams);
    }
  };

  setFiltersByUrlQuery = queryParams => {
    const filterParam = queryParams.get('filter');
    const searchParam = queryParams.get('search');

    if ([LIGHTNESS, DARKNESS].includes(filterParam)) {
      this.props.updateFilterSelect(filterParam);
    }

    if (searchParam !== null) {
      this.props.updateFilterText(searchParam);
    }
  }

  setSortByUrlQuery = queryParams => {
    const sortParam = queryParams.get('sort');
    const orderParam = queryParams.get('order');
    const sortOptions = [
      USAGE,
      BRIGHTNESS,
      LUMINESCENCE,
      ALPHABETICAL,
      TRANSPARENCY,
    ];

    if (sortOptions.includes(sortParam)) {
      this.props.updateSortSelect(sortParam);
    }

    if ([ASCENDING, DESCENDING].includes(orderParam)) {
      this.props.updateSortOrder(orderParam);
    }
  }

  setVisibility = () => ({
    visibility: this.props.colorDetail ? 'hidden' : 'visible',
  });

  getFilteredSortedColorList = () => {
    const filteredPalette = Object.keys(this.props.palette)
      .filter(this.search)
      .filter(color => (
        this.props.filterByEnabled ? this.filterBy(color) : true
      ));

    let sortedPalette = lodashSortBy(filteredPalette, this.sortColor);

    // Sorting logic should flip for Transparency so ascending shows
    // least to most transparent and vice-versa.
    if (this.props.sortBy === TRANSPARENCY) {
      sortedPalette = (
        this.props.sortOrder === ASCENDING
          ? sortedPalette.reverse()
          : sortedPalette
      );
    } else {
      sortedPalette = (
        this.props.sortOrder === ASCENDING
          ? sortedPalette
          : sortedPalette.reverse()
      );
    }

    return sortedPalette;
  }

  getFilteredSortedPalette = () => {
    const filteredSortedPalette = {};

    this.getFilteredSortedColorList().forEach(color => {
      filteredSortedPalette[color] = this.props.palette[color];
    });

    return filteredSortedPalette;
  }

  search = color => color.includes(this.props.filterText)

  filterBy = color => (
    this.props.filterBy === LIGHTNESS
      ? tinycolor(color).isLight()
      : this.props.filterBy === DARKNESS
        ? tinycolor(color).isDark()
        : true
  )

  sortColor = color => (
    this.props.sortBy === USAGE
      ? this.props.palette[color].locations.length
      : this.props.sortBy === BRIGHTNESS
        ? tinycolor(color).getBrightness()
        : this.props.sortBy === LUMINESCENCE
          ? tinycolor(color).getLuminance()
          : this.props.sortBy === TRANSPARENCY
            ? tinycolor(color).getAlpha()
            : this.props.sortBy === ALPHABETICAL
              ? color
              : color
  )

  togglePopup = () => {
    this.setState(prevState => ({
      popUpOpen: !prevState.popUpOpen,
    }));
  }

  navigateBackHandler = () => {
    this.props.history.push('/');
  }

  render = () => (
    <Palette
      locations={this.props.palette[this.props.colorDetail]}
      colorDetail={this.props.colorDetail}
      projectName={this.props.match.params.project}
      navigateBackHandler={this.navigateBackHandler}
      popUpOpen={this.state.popUpOpen}
      togglePopup={this.togglePopup}
      filterText={this.props.filterText}
      updateFilterText={this.props.updateFilterText}
      sortBy={this.props.sortBy}
      updateSortSelect={this.props.updateSortSelect}
      filterBy={this.props.filterBy}
      updateFilterSelect={this.props.updateFilterSelect}
      sortOrder={this.props.sortOrder}
      updateSortOrder={this.props.updateSortOrder}
      filterByEnabled={this.props.filterByEnabled}
      disableFilterSelect={this.props.disableFilterSelect}
      enableFilterSelect={this.props.enableFilterSelect}
      filteredSortedPalette={this.getFilteredSortedPalette()}
      filteredSortedColorList={this.getFilteredSortedColorList()}
      openColorDetail={this.props.openColorDetail}
    />
  )
}

const mapStateToProps = state => ({
  filterText: state.filters.filterText,
  filterBy: state.filters.filterBy,
  filterByEnabled: state.filters.filterByEnabled,
  colorDetail: state.colorDetail,
  palette: state.palette,
  sortBy: state.sort.sortBy,
  sortOrder: state.sort.sortOrder,
});

const mapDispatchToProps = {
  asyncFetchColorPalette,
  updateFilterText,
  updateFilterSelect,
  enableFilterSelect,
  disableFilterSelect,
  updateSortSelect,
  updateSortOrder,
  openColorDetail,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PaletteContainer),
);

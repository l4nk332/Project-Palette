import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import tinycolor from 'tinycolor2';
import lodashSortBy from 'lodash/sortBy';

import SortDescIcon from 'react-icons/lib/fa/sort-amount-desc';
import SortAscIcon from 'react-icons/lib/fa/sort-amount-asc';
import FilterIcon from 'react-icons/lib/fa/filter';

import {
  asyncFetchColorPalette,
  updateFilterText,
  updateFilterSelect,
  toggleFilterSelect,
  updateSortSelect,
  toggleSortOrder,
  updateSortOrder,
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

import {DetailContainer} from 'containers';

import {
  Grid,
  Navbar,
  TextField,
  ColorSwatch,
  SelectField,
  IconAssistedField,
  Toggleable,
  DownloadDropdown,
  NavigateBack,
} from 'components';

class PaletteContainer extends React.Component {
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

  renderSwatches = () => (
    this.getFilteredSortedColorList().map(color => (
      <ColorSwatch key={color} color={color} />
    ))
  )

  renderDetailContainer = () => {
    const locations = this.props.palette[this.props.colorDetail];
    return <DetailContainer locations={locations} />;
  };

  render = () => (
    <div>
      <div style={this.setVisibility()}>
        <Navbar>
          <NavigateBack
            text={this.props.match.params.project}
            clickHandler={() => { this.props.history.push('/'); }}
          />
          <IconAssistedField
            Field={
              <SelectField
                placeholder="Sort By"
                values={[
                  {
                    label: 'Usage',
                    value: USAGE,
                    selected: this.props.sortBy === USAGE,
                  },
                  {
                    label: 'Brightness',
                    value: BRIGHTNESS,
                    selected: this.props.sortBy === BRIGHTNESS,
                  },
                  {
                    label: 'Luminescence',
                    value: LUMINESCENCE,
                    selected: this.props.sortBy === LUMINESCENCE,
                  },
                  {
                    label: 'Transparency',
                    value: TRANSPARENCY,
                    selected: this.props.sortBy === TRANSPARENCY,
                  },
                  {
                    label: 'Alphabetical',
                    value: ALPHABETICAL,
                    selected: this.props.sortBy === ALPHABETICAL,
                  },
                ]}
                clickHandler={this.props.updateSortSelect}
                width="132px"
              />
            }
            Icon={
              <Toggleable toggled>
                {
                  this.props.sortOrder === ASCENDING
                    ? <SortAscIcon onClick={this.props.toggleSortOrder} />
                    : <SortDescIcon onClick={this.props.toggleSortOrder} />
                }
              </Toggleable>
            }
          />
          <IconAssistedField
            Field={
              <SelectField
                placeholder="Filter By"
                values={[
                  {
                    label: 'Lightness',
                    value: LIGHTNESS,
                    selected: this.props.filterBy === LIGHTNESS,
                  },
                  {
                    label: 'Darkness',
                    value: DARKNESS,
                    selected: this.props.filterBy === DARKNESS,
                  },
                ]}
                clickHandler={this.props.updateFilterSelect}
                width="132px"
              />
            }
            Icon={
              <Toggleable toggled={this.props.filterByEnabled}>
                <FilterIcon onClick={this.props.toggleFilterSelect} />
              </Toggleable>
            }
          />
          <TextField
            placeholderText="search..."
            value={this.props.filterText}
            changeHandler={event => {
              const {value} = event.target;
              this.props.updateFilterText(value);
            }}
            focusHandler={() => {
              this.props.updateFilterText('');
            }}
          />
          <DownloadDropdown
            projectName={this.props.match.params.project}
            palette={this.getFilteredSortedPalette()}
          />
        </Navbar>
        <Grid>{this.renderSwatches()}</Grid>
      </div>
      {this.props.colorDetail && this.renderDetailContainer()}
    </div>
  );
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
  toggleFilterSelect,
  updateSortSelect,
  toggleSortOrder,
  updateSortOrder,
};

PaletteContainer.defaultProps = {
  colorDetail: null,
  filterText: '',
  filterBy: null,
};

PaletteContainer.propTypes = {
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
  toggleFilterSelect: PropTypes.func.isRequired,
  updateSortSelect: PropTypes.func.isRequired,
  toggleSortOrder: PropTypes.func.isRequired,
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
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PaletteContainer),
);

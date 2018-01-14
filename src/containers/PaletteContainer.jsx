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
} from 'components';

class PaletteContainer extends React.Component {
  componentDidMount = () => {
    const {name, project} = this.props.match.params;
    if (name && project) {
      this.props.asyncFetchColorPalette(`${name}/${project}`);
    }
  };

  setVisibility = () => ({
    visibility: this.props.colorDetail ? 'hidden' : 'visible',
  });

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
          <IconAssistedField
            Field={
              <SelectField
                placeholder="Sort By"
                values={[
                  {label: 'Usage', value: USAGE},
                  {label: 'Brightness', value: BRIGHTNESS},
                  {label: 'Luminescence', value: LUMINESCENCE},
                  {label: 'Transparency', value: TRANSPARENCY},
                  {label: 'Alphabetical', value: ALPHABETICAL},
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
                  {label: 'Lightness', value: LIGHTNESS},
                  {label: 'Darkness', value: DARKNESS},
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
};

PaletteContainer.defaultProps = {
  colorDetail: null,
  filterText: '',
  filterBy: null,
};

PaletteContainer.propTypes = {
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

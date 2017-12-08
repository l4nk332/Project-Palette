import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import tinycolor from 'tinycolor2';

import SortDescIcon from 'react-icons/lib/fa/sort-amount-desc';
import FilterIcon from 'react-icons/lib/fa/filter';

import {
  asyncFetchColorPalette,
  updateFilterText,
  updateFilterSelect,
} from '../redux/actionCreators';

import {
  USAGE,
  BRIGHTNESS,
  LUMINESCENCE,
  ALPHA,
  LIGHTNESS,
  DARKNESS,
} from '../utils/constants';

import DetailContainer from './DetailContainer';

import Grid from '../components/Grid/Grid';
import Navbar from '../components/Navbar/Navbar';
import TextField from '../components/TextField/TextField';
import ColorSwatch from '../components/ColorSwatch/ColorSwatch';
import SelectField from '../components/SelectField/SelectField';
import IconAssistedField from '../components/IconAssistedField/IconAssistedField';

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

  renderSwatches = () => (
    Object.keys(this.props.palette)
      .filter(color => color.includes(this.props.filterText))
      .filter(color => (
        this.props.filterBy === LIGHTNESS
          ? tinycolor(color).isLight()
          : this.props.filterBy === DARKNESS
            ? tinycolor(color).isDark()
            : true
      ))
      .map(color => <ColorSwatch key={color} color={color} />)
  );

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
                  {label: 'Alpha', value: ALPHA},
                ]}
                clickHandler={console.log()}
                width="132px"
              />
            }
            Icon={<SortDescIcon />}
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
            Icon={<FilterIcon />}
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
  colorDetail: state.colorDetail,
  palette: state.palette,
});

const mapDispatchToProps = {
  asyncFetchColorPalette,
  updateFilterText,
  updateFilterSelect,
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
  palette: PropTypes.object.isRequired,
  colorDetail: PropTypes.string,
  filterText: PropTypes.string,
  filterBy: PropTypes.string,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PaletteContainer),
);

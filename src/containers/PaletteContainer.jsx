import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {
  asyncFetchColorPalette,
  updateFilterText,
} from '../redux/actionCreators';

import DetailContainer from './DetailContainer';

import Grid from '../components/Grid/Grid';
import Navbar from '../components/Navbar/Navbar';
import TextField from '../components/TextField/TextField';
import ColorSwatch from '../components/ColorSwatch/ColorSwatch';

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
  colorDetail: state.colorDetail,
  palette: state.palette,
});

const mapDispatchToProps = {
  asyncFetchColorPalette,
  updateFilterText,
};

PaletteContainer.defaultProps = {
  colorDetail: null,
  filterText: '',
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
  palette: PropTypes.object.isRequired,
  colorDetail: PropTypes.string,
  filterText: PropTypes.string,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PaletteContainer),
);

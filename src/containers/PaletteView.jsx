import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {asyncFetchColorPalette} from '../redux/actionCreators';

import DetailView from './DetailView';

import Grid from '../components/Grid/Grid';
import ColorSwatch from '../components/ColorSwatch/ColorSwatch';

class PaletteView extends React.Component {
  componentDidMount = () => {
    const {name, project} = this.props.match.params;
    if (name && project) {
      this.props.asyncFetchColorPalette(`${name}/${project}`);
    }
  };

  setVisibility = () => ({
    visibility: this.props.colorDetail ? 'hidden' : 'visible',
  });

  renderSwatches = () =>
    Object.keys(this.props.palette).map(color => (
      <ColorSwatch key={color} color={color} />
    ));

  renderDetailView = () => {
    const locations = this.props.palette[this.props.colorDetail];
    return <DetailView locations={locations} />;
  };

  render = () => (
    <div>
      <div style={this.setVisibility()}>
        <Grid>{this.renderSwatches()}</Grid>
      </div>
      {this.props.colorDetail && this.renderDetailView()}
    </div>
  );
}

const mapStateToProps = state => ({
  colorDetail: state.colorDetail,
  palette: state.palette,
});

const mapDispatchToProps = {
  asyncFetchColorPalette,
};

PaletteView.defaultProps = {
  colorDetail: null,
};

PaletteView.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
      project: PropTypes.string,
    }),
  }).isRequired,
  asyncFetchColorPalette: PropTypes.func.isRequired,
  palette: PropTypes.object.isRequired,
  colorDetail: PropTypes.string,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PaletteView),
);

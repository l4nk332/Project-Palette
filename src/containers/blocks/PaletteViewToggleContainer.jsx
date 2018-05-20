import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {
  changePaletteView,
} from 'redux/actionCreators';

import {GRID, REPORT} from 'utils/constants';

import {PaletteViewToggle} from 'components';


class PaletteViewToggleContainer extends React.Component {
  static propTypes = {
    paletteView: PropTypes.oneOf([GRID, REPORT]).isRequired,
    changePaletteView: PropTypes.func.isRequired,
  }

  toggleView = () => {
    const {changePaletteView, paletteView} = this.props;
    changePaletteView(paletteView === GRID ? REPORT : GRID);
  }

  render = () => (
    <PaletteViewToggle
      paletteView={this.props.paletteView}
      toggleView={this.toggleView}
    />
  )
}

const mapStateToProps = state => ({
  paletteView: state.paletteView,
});

const mapDispatchToProps = {
  changePaletteView,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PaletteViewToggleContainer),
);

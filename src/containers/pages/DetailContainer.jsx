import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {closeColorDetail} from 'redux/actionCreators';

import {toggleStaticBody} from 'utils/misc';

import {
  Detail,
} from 'components';


class DetailContainer extends React.Component {
  static propTypes = {
    closeColorDetail: PropTypes.func.isRequired,
    colorDetail: PropTypes.string.isRequired,
    locations: PropTypes.shape({
      locations: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
    projectUrl: PropTypes.string.isRequired,
  };

  handleClose = () => {
    toggleStaticBody(false);
    this.props.closeColorDetail();
  };

  render = () => (
    <Detail
      handleClose={this.handleClose}
      color={this.props.colorDetail}
      locations={this.props.locations.locations}
      projectUrl={this.props.projectUrl}
    />
  )
}

const mapStateToProps = state => ({
  colorDetail: state.colorDetail,
  projectUrl: state.projectUrl,
});

const mapDispatchToProps = {
  closeColorDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);

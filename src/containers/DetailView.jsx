import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {closeColorDetail} from '../redux/actionCreators';

import toggleStaticBody from '../utils/misc';

import Backdrop from '../components/Backdrop/Backdrop';
import LocationList from '../components/LocationList/LocationList';
import Heading from '../components/Heading/Heading';
import CloseIcon from '../components/CloseIcon/CloseIcon';

class DetailView extends React.Component {
  closeColorDetail = () => {
    toggleStaticBody(false);
    this.props.closeColorDetail();
  };

  render = () => (
    <Backdrop color={this.props.colorDetail}>
      <CloseIcon handleClick={this.closeColorDetail} />
      <Heading>{this.props.colorDetail}</Heading>
      <LocationList
        color={this.props.colorDetail}
        locations={this.props.locations.locations}
        projectUrl={this.props.projectUrl}
      />
    </Backdrop>
  )
}

const mapStateToProps = state => ({
  colorDetail: state.colorDetail,
  projectUrl: state.projectUrl,
});

const mapDispatchToProps = {
  closeColorDetail,
};

DetailView.propTypes = {
  closeColorDetail: PropTypes.func.isRequired,
  colorDetail: PropTypes.string.isRequired,
  locations: PropTypes.shape({
    locations: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  projectUrl: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailView);

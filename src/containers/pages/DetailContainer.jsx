import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {closeColorDetail, openColorDetail} from 'redux/actionCreators';

import {toggleStaticBody} from 'utils/misc';

import {
  Detail,
} from 'components';


class DetailContainer extends React.Component {
  static propTypes = {
    closeColorDetail: PropTypes.func.isRequired,
    openColorDetail: PropTypes.func.isRequired,
    colorDetail: PropTypes.string.isRequired,
    locations: PropTypes.shape({
      locations: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
    projectUrl: PropTypes.string.isRequired,
    defaultBranch: PropTypes.string.isRequired,
    filteredSortedColorList: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  handleClose = () => {
    toggleStaticBody(false);
    this.props.closeColorDetail();
  };

  nextColor = () => {
    const {filteredSortedColorList, colorDetail} = this.props;
    const currentIndex = filteredSortedColorList.indexOf(colorDetail);
    const nextIndex = currentIndex < filteredSortedColorList.length - 1 ? currentIndex + 1 : 0;
    const nextColor = filteredSortedColorList[nextIndex];

    this.props.openColorDetail(nextColor);
  }

  previousColor = () => {
    const {filteredSortedColorList, colorDetail} = this.props;
    const currentIndex = filteredSortedColorList.indexOf(colorDetail);
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : filteredSortedColorList.length - 1;
    const previousColor = filteredSortedColorList[previousIndex];

    this.props.openColorDetail(previousColor);
  }

  render = () => (
    <Detail
      handleClose={this.handleClose}
      color={this.props.colorDetail}
      locations={this.props.locations.locations}
      projectUrl={this.props.projectUrl}
      defaultBranch={this.props.defaultBranch}
      nextColor={this.nextColor}
      previousColor={this.previousColor}
    />
  )
}

const mapStateToProps = state => ({
  colorDetail: state.colorDetail,
  projectUrl: state.projectUrl,
  defaultBranch: state.defaultBranch,
});

const mapDispatchToProps = {
  closeColorDetail,
  openColorDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);

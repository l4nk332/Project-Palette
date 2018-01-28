import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ColorSwatch} from 'components';
import {getTextColor} from 'utils/color-manipulation';
import {toggleStaticBody} from 'utils/misc';

import {openColorDetail} from 'redux/actionCreators';


class ColorSwatchContainer extends React.Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    openColorDetail: PropTypes.func.isRequired,
  };

  state = {
    hasCopied: false,
  };

  normalizedColor = this.props.color.toLowerCase();

  textColor = getTextColor(this.normalizedColor);

  openColorDetail = () => {
    toggleStaticBody();
    this.props.openColorDetail(this.props.color);
  }

  copiedToClipboard = () => {
    this.setState({hasCopied: true}, () => {
      setTimeout(() => {
        this.setState({hasCopied: false});
      }, 1000);
    });
  }

  render = () => (
    <ColorSwatch
      color={this.props.color}
      normalizedColor={this.normalizedColor}
      textColor={this.textColor}
      copiedToClipboard={this.copiedToClipboard}
      openColorDetail={this.openColorDetail}
      hasCopied={this.state.hasCopied}
    />
  )
}

const mapDispatchToProps = {
  openColorDetail,
};

export default connect(null, mapDispatchToProps)(ColorSwatchContainer);

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CopyToClipboard from 'react-copy-to-clipboard';

import CopyIcon from 'react-icons/lib/io/ios-copy';
import CheckMarkIcon from 'react-icons/lib/io/checkmark';
import TiArrowMaximise from 'react-icons/lib/ti/arrow-maximise';

import {getTextColor} from 'utils/color-manipulation';
import {toggleStaticBody} from 'utils/misc';

import {openColorDetail} from 'redux/actionCreators';

import s from './ColorSwatch.sass';


class ColorSwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCopied: false,
    };

    this.color = this.props.color;
    this.normalizedColor = this.props.color.toLowerCase();
    this.textColor = getTextColor(this.normalizedColor);
  }

  openColorDetail = color => {
    toggleStaticBody();
    this.props.openColorDetail(color);
  }

  copiedToClipboard = () => {
    this.setState({hasCopied: true}, () => {
      setTimeout(() => {
        this.setState({hasCopied: false});
      }, 1000);
    });
  }

  render = () => (
    <div
      style={{backgroundColor: this.normalizedColor}}
      className={s.container}
    >
      <div className={s.icons}>
        <CopyToClipboard text={this.normalizedColor}>
          <a title="Copy to Clipboard">
            {this.state.hasCopied ? (
              <CheckMarkIcon style={{color: this.textColor}} />
            ) : (
              <CopyIcon
                className={s.icon}
                onClick={this.copiedToClipboard}
                style={{color: this.textColor}}
              />
            )}
          </a>
        </CopyToClipboard>
        <a title="Expand Color Details">
          <TiArrowMaximise
            style={{color: this.textColor}}
            className={s.icon}
            onClick={() => {
              this.openColorDetail(this.color);
            }}
          />
        </a>
      </div>
      <span style={{color: this.textColor}}>
        {this.state.hasCopied ? 'Copied to Clipboard' : this.normalizedColor}
      </span>
    </div>
  )
}

const mapDispatchToProps = {
  openColorDetail,
};

ColorSwatch.propTypes = {
  color: PropTypes.string.isRequired,
  openColorDetail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ColorSwatch);

import React from 'react';
import PropTypes from 'prop-types';
import CopyToClipboard from 'react-copy-to-clipboard';
import CopyIcon from 'react-icons/lib/io/ios-copy';
import CheckMarkIcon from 'react-icons/lib/io/checkmark';

class CopyContainer extends React.Component {
  static propTypes = {
    textToCopy: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  };

  state = {
    hasCopied: false,
  };

  copiedToClipboard = event => {
    event.stopPropagation();
    this.setState({hasCopied: true}, () => {
      setTimeout(() => {
        this.setState({hasCopied: false});
      }, 1000);
    });
  }

  render = () => {
    const {textToCopy, color} = this.props;
    const {hasCopied} = this.state;

    return (
      <CopyToClipboard text={textToCopy}>
        <a title={hasCopied ? 'Copied' : 'Copy to Clipboard'}>
          {hasCopied ? (
            <CheckMarkIcon style={{color}} />
          ) : (
            <CopyIcon onClick={this.copiedToClipboard} style={{color}} />
          )}
        </a>
      </CopyToClipboard>
    );
  }
}

export default CopyContainer;

import React from 'react';
import PropTypes from 'prop-types';

import {Copy} from 'components';

class CopyContainer extends React.Component {
  static propTypes = {
    textToCopy: PropTypes.string.isRequired,
  };

  state = {
    hasCopied: false,
  };

  copiedToClipboard = () => {
    this.setState({hasCopied: true}, () => {
      setTimeout(() => {
        this.setState({hasCopied: false});
      }, 1000);
    });
  }

  render = () => (
    <Copy
      {...this.props}
      {...this.state}
      copiedToClipboard={this.copiedToClipboard}
    />
  );
}

export default CopyContainer;

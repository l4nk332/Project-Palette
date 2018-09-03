import React from 'react';

import {OptionsPopup} from 'components';

class OptionsPopupContainer extends React.Component {
  state = {
    isOpen: false,
  }

  openPopup = () => {
    this.setState({isOpen: true});
  }

  closePopup = () => {
    this.setState({isOpen: false});
  }

  render = () => (
    <OptionsPopup
      openPopup={this.openPopup}
      closePopup={this.closePopup}
      isOpen={this.state.isOpen}
    />
  )
}

export default OptionsPopupContainer;

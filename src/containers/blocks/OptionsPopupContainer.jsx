import React from 'react';

import {OptionsPopup} from 'components';

class OptionsPopupContainer extends React.Component {
  state = {
    isOpen: true,
  }

  togglePopup = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render = () => (
    <OptionsPopup
      togglePopup={this.togglePopup}
      isOpen={this.state.isOpen}
    />
  )
}

export default OptionsPopupContainer;

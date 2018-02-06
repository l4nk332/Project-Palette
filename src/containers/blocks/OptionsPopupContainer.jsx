import React from 'react';
import PropTypes from 'prop-types';

import OptionsIcon from 'react-icons/lib/io/android-options';

import {Popup, Toggleable} from 'components';

class OptionsPopupContainer extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  state = {
    isOpen: false,
  }

  togglePopup = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render = () => (
    <Popup
      isOpen={this.state.isOpen}
      position={['bottom', 'left']}
      icon={(
        <Toggleable toggled={this.state.isOpen}>
          <OptionsIcon
            onClick={this.togglePopup}
          />
        </Toggleable>
      )}
    >
      {this.props.children}
    </Popup>
  )
}

export default OptionsPopupContainer;

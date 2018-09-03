import React from 'react';
import PropTypes from 'prop-types';

class OutsideClickContainer extends React.Component {
  static propTypes = {
    onOutsideClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };

  componentDidMount = () => {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef = node => {
    this.wrapperRef = node;
  }

  handleClickOutside = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.onOutsideClick();
    }
  }

  render = () => (
    <section ref={this.setWrapperRef}>
      {this.props.children}
    </section>
  )
}

export default OutsideClickContainer;

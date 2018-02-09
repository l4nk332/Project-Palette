import React from 'react';
import PropTypes from 'prop-types';

import {ScrollTop} from 'components';


class ScrollTopContainer extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    isVisible: PropTypes.bool,
  }

  static defaultProps = {
    children: null,
    isVisible: false,
  }

  state = {
    scrollTop: 0,
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      scrollTop: document.scrollingElement.scrollTop,
    });
  }

  scrollUp = () => {
    document.querySelector('html').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  render = () => (
    <ScrollTop
      isVisible={this.props.isVisible}
      scrollUp={this.scrollUp}
      canScrollUp={this.state.scrollTop > 500}
    >
      {this.props.children}
    </ScrollTop>
  )
}

export default ScrollTopContainer;

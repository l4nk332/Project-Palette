import React from 'react';
import PropTypes from 'prop-types';


class FadeContainer extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);
    this.opacity = 0;
    this.fadeRef = React.createRef();
  }

  componentDidMount() {
    this.startAnimation();
  }

  componentWillUnmount() {
    this.stopAnimation();
  }

  startAnimation = () => {
    if (!this.frameId) {
      this.frameId = window.requestAnimationFrame(this.animate);
    }
  }

  animate = () => {
    if (this.fadeRef.current.style.opacity >= 1) {
      this.stopAnimation();
    } else {
      // perform animate work here
      this.opacity += 0.1;
      this.fadeRef.current.style.opacity = this.opacity;

      // Set up next iteration of the animate
      this.frameId = window.requestAnimationFrame(this.animate);
    }
  }

  stopAnimation = () => {
    window.cancelAnimationFrame(this.frameId);
  }

  render() {
    return <div ref={this.fadeRef}>{this.props.children}</div>;
  }
}


export default FadeContainer;

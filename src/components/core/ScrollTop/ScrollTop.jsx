import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import UpIcon from 'react-icons/lib/io/ios-arrow-thin-up';

import s from './ScrollTop.sass';


const ScrollTop = ({
  isVisible,
  canScrollUp,
  scrollUp,
  children,
}) => (
  <section
    className={classNames(s.container, {[s.visible]: isVisible})}
  >
    {children}
    <button
      onClick={scrollUp}
      className={classNames(s.button, {[s.hidden]: !canScrollUp})}
    >
      <UpIcon />
    </button>
  </section>
);

ScrollTop.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool.isRequired,
  scrollUp: PropTypes.func.isRequired,
  canScrollUp: PropTypes.bool.isRequired,
};

export default ScrollTop;

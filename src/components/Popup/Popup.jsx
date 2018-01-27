import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import s from './Popup.sass';


const Popup = ({
  isOpen,
  icon,
  position,
  children,
}) => (
  <section className={s.container}>
    <span className={s.icon}>{icon}</span>
    {
      isOpen &&
      <figure
        className={classNames(s.figure, {
          [s.top]: position.includes('top'),
          [s.right]: position.includes('right'),
          [s.bottom]: position.includes('bottom'),
          [s.left]: position.includes('left'),
        })}
      >
        {children}
      </figure>
    }
  </section>
);

Popup.defaultProps = {
  isOpen: false,
  icon: null,
  position: {},
  children: null,
};

Popup.propTypes = {
  isOpen: PropTypes.bool,
  icon: PropTypes.node,
  position: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
};

export default Popup;

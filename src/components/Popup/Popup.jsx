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
          [s.top]: position.top,
          [s.right]: position.right,
          [s.bottom]: position.bottom,
          [s.left]: position.left,
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
  position: PropTypes.shape({
    top: PropTypes.bool,
    right: PropTypes.bool,
    bottom: PropTypes.bool,
    left: PropTypes.bool,
  }),
  children: PropTypes.node,
};

export default Popup;

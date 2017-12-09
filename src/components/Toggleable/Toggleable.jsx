import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Toggleable.sass';

const Toggleable = ({toggled, children}) => (
  <span
    className={classNames({
      toggleable: true,
      toggled,
    })}
  >
    {children}
  </span>
);

Toggleable.defaultProps = {
  toggled: false,
};

Toggleable.propTypes = {
  toggled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Toggleable;

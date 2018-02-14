import React from 'react';
import PropTypes from 'prop-types';

import s from './ColorizedText.sass';


const ColorizedText = ({children}) => (
  <span className={s.container}>{children}</span>
);

ColorizedText.defaultProps = {
  children: null,
};

ColorizedText.propTypes = {
  children: PropTypes.node,
};

export default ColorizedText;

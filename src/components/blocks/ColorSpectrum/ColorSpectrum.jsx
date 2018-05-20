import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import s from './ColorSpectrum.sass';

const ColorSpectrum = ({className}) => (
  <section className={classNames(s.container, {[className]: className})} />
);

ColorSpectrum.defaultProps = {
  className: '',
};

ColorSpectrum.propTypes = {
  className: PropTypes.string,
};

export default ColorSpectrum;

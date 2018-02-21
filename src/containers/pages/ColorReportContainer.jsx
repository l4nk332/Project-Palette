import React from 'react';
import PropTypes from 'prop-types';

import {ColorReport} from 'components';

import {getContrastPercentages} from 'utils/color-manipulation';


class ColorReportContainer extends React.Component {
  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  getEstimatedContrast = () => {
    const contrast = getContrastPercentages(this.props.colors);

    return {
      light: Math.round(contrast.light),
      dark: Math.round(contrast.dark),
    };
  };

  render = () => (
    <ColorReport
      contrast={this.getEstimatedContrast()}
    />
  )
}

export default ColorReportContainer;

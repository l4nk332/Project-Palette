import React from 'react';
import PropTypes from 'prop-types';

import lodashMaxBy from 'lodash/maxBy';

import {Report} from 'components';

import {getContrastPercentages} from 'utils/color-manipulation';


class ReportContainer extends React.Component {
  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    palette: PropTypes.object.isRequired,
    openColorDetail: PropTypes.func.isRequired,
  };

  getEstimatedContrast = () => {
    const contrast = getContrastPercentages(this.props.colors);

    return {
      light: Math.round(contrast.light),
      dark: Math.round(contrast.dark),
    };
  };

  getTotalLocations = () => (
    Object
      .keys(this.props.palette)
      .reduce((acc, cur) => acc + this.props.palette[cur].locations.length, 0)
  );

  getColorPercentages = () => (
    this.props.colors.map(color => ({
      percentage: (this.props.palette[color].locations.length / this.getTotalLocations()) * 100,
      color,
    }))
  )

  getPrimaryColorPercentage = () => {
    if (!this.props.colors.length) {
      return {color: '#0000', percentage: 0};
    }

    return lodashMaxBy(this.getColorPercentages(), obj => obj.percentage);
  }


  render = () => (
    <Report
      contrast={this.getEstimatedContrast()}
      primaryColor={this.getPrimaryColorPercentage()}
      palette={this.props.palette}
      openColorDetail={this.props.openColorDetail}
    />
  )
}

export default ReportContainer;

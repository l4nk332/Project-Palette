import React from 'react';
import PropTypes from 'prop-types';

import {DownloadDropdown} from 'components';

import SvgGenerator from 'utils/svg-generator';
import download from 'utils/download';


class DownloadDropdownContainer extends React.Component {
  static propTypes = {
    projectName: PropTypes.string.isRequired,
    palette: PropTypes.object.isRequired,
  };

  state = {
    isOpen: false,
  };

  setWrapperRef = node => {
    this.wrapperRef = node;
  }

  openDropdown = () => {
    this.setState({isOpen: true});
  };

  closeDropdown = () => {
    this.setState({isOpen: false});
  };

  downloadJson = () => {
    download(
      `${this.props.projectName}.json`,
      JSON.stringify(this.props.palette),
      'application/json',
    );
  }

  downloadSvg = () => {
    const colorList = Object.keys(this.props.palette);
    const svgGeneratorInstance = new SvgGenerator(colorList);
    const svgExportText = svgGeneratorInstance.render();

    download(
      `${this.props.projectName}.svg`,
      svgExportText,
      'image/svg+xml',
    );
  }

  handleSvg = () => {
    this.downloadSvg();
    this.closeDropdown();
  }

  handleJson = () => {
    this.downloadJson();
    this.closeDropdown();
  }

  render = () => (
    <DownloadDropdown
      isOpen={this.state.isOpen}
      openDropdown={this.openDropdown}
      closeDropdown={this.closeDropdown}
      handleSvg={this.handleSvg}
      handleJson={this.handleJson}
    />
  )
}

export default DownloadDropdownContainer;

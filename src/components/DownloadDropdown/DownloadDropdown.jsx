import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import DownloadIcon from 'react-icons/lib/io/ios-download';

import {triggerIfEnterKey} from 'utils/misc';
import SvgGenerator from 'utils/svg-generator';
import download from 'utils/download';

import s from './DownloadDropdown.sass';


class DownloadDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggleDropdown = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  closeDropdown = () => {
    this.setState({
      isOpen: false,
    });
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

  handleBlur = event => {
    const {currentTarget} = event;

    // This setTimeout is necessary because the element won't be
    // focused as the blur event happens, which will cause bubbling up
    // to occur.
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        this.closeDropdown();
      }
    }, 0);
  }

  render() {
    return (
      <section
        className={s.container}
        onBlur={this.handleBlur}
      >
        <DownloadIcon
          className={s.icon}
          onClick={this.toggleDropdown}
        />
        <ul
          className={classNames(s.list, {
            [s.open]: this.state.isOpen,
          })}
        >
          <li
            role="button"
            tabIndex="0"
            key={1}
            onMouseDown={() => {
              this.downloadSvg();
              this.closeDropdown();
            }}
            onKeyDown={event => {
              triggerIfEnterKey(event, () => {
              this.downloadSvg();
              this.closeDropdown();
              });
            }}
          >
            SVG
          </li>
          <li
            role="button"
            tabIndex="0"
            key={2}
            onMouseDown={() => {
              this.downloadJson();
              this.closeDropdown();
            }}
            onKeyDown={event => {
              triggerIfEnterKey(event, () => {
              this.downloadJson();
              this.closeDropdown();
              });
            }}
          >
            JSON
          </li>
        </ul>
      </section>
    );
  }
}

DownloadDropdown.propTypes = {
  projectName: PropTypes.string.isRequired,
  palette: PropTypes.object.isRequired,
};

export default DownloadDropdown;

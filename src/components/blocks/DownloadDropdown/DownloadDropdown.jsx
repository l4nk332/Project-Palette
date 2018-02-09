import React from 'react';
import PropTypes from 'prop-types';

import DownloadIcon from 'react-icons/lib/io/ios-download';

import {Popup} from 'components';

import {triggerIfEnterKey} from 'utils/misc';

import s from './DownloadDropdown.sass';


const DownloadDropdown = ({
  isOpen,
  toggleDropdown,
  setWrapperRef,
  handleSvg,
  handleJson,
}) => (
  <Popup
    isOpen={isOpen}
    position={['bottom', 'left']}
    icon={(
      <DownloadIcon
        className={s.icon}
        onClick={toggleDropdown}
      />
    )}
  >
    <ul
      className={s.list}
      ref={setWrapperRef}
    >
      <li
        role="button"
        tabIndex="0"
        key={1}
        onMouseDown={handleSvg}
        onKeyDown={event => {
          triggerIfEnterKey(event, handleSvg);
        }}
      >
        SVG
      </li>
      <li
        role="button"
        tabIndex="0"
        key={2}
        onMouseDown={handleJson}
        onKeyDown={event => {
          triggerIfEnterKey(event, handleJson);
        }}
      >
        JSON
      </li>
    </ul>
  </Popup>
);

DownloadDropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  setWrapperRef: PropTypes.func.isRequired,
  handleSvg: PropTypes.func.isRequired,
  handleJson: PropTypes.func.isRequired,
};

export default DownloadDropdown;

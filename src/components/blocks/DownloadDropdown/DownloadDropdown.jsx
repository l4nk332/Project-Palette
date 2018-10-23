import React from 'react';
import PropTypes from 'prop-types';

import DownloadIcon from 'react-icons/lib/io/ios-download';

import {OutsideClickContainer} from 'containers';
import {Popup} from 'components';

import {triggerIfEnterKey} from 'utils/misc';

import s from './DownloadDropdown.sass';


const DownloadDropdown = ({
  isOpen,
  openDropdown,
  closeDropdown,
  handleSvg,
  handleJson,
}) => (
  <OutsideClickContainer onOutsideClick={closeDropdown}>
    <Popup
      isOpen={isOpen}
      position={['bottom', 'left']}
      icon={(
        <DownloadIcon
          style={{verticalAlign: 'bottom'}}
          className={s.icon}
          onClick={isOpen ? closeDropdown : openDropdown}
        />
      )}
    >
      <ul className={s.list}>
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
  </OutsideClickContainer>
);

DownloadDropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  openDropdown: PropTypes.func.isRequired,
  closeDropdown: PropTypes.func.isRequired,
  handleSvg: PropTypes.func.isRequired,
  handleJson: PropTypes.func.isRequired,
};

export default DownloadDropdown;

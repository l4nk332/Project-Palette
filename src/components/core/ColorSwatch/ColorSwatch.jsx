import React from 'react';
import PropTypes from 'prop-types';
import CopyToClipboard from 'react-copy-to-clipboard';

import CopyIcon from 'react-icons/lib/io/ios-copy';
import CheckMarkIcon from 'react-icons/lib/io/checkmark';

import {triggerIfEnterKey} from 'utils/misc';

import s from './ColorSwatch.sass';


const ColorSwatch = ({
  normalizedColor,
  textColor,
  copiedToClipboard,
  openColorDetail,
  hasCopied,
}) => (
  <div
    style={{backgroundColor: normalizedColor}}
    className={s.container}
    onClick={openColorDetail}
    onKeyDown={event => {
      triggerIfEnterKey(event, openColorDetail);
    }}
    tabIndex="0"
    role="button"
  >
    <div className={s.icons}>
      <CopyToClipboard text={normalizedColor}>
        <a title="Copy to Clipboard">
          {hasCopied ? (
            <CheckMarkIcon style={{color: textColor}} />
          ) : (
            <CopyIcon
              className={s.icon}
              onClick={event => {
                event.stopPropagation();
                copiedToClipboard(event);
              }}
              style={{color: textColor}}
            />
          )}
        </a>
      </CopyToClipboard>
    </div>
    <span style={{color: textColor}}>
      {hasCopied ? 'Copied to Clipboard' : normalizedColor}
    </span>
  </div>
);

ColorSwatch.propTypes = {
  openColorDetail: PropTypes.func.isRequired,
  normalizedColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  copiedToClipboard: PropTypes.func.isRequired,
  hasCopied: PropTypes.bool.isRequired,
};

export default ColorSwatch;

import React from 'react';
import PropTypes from 'prop-types';
import CopyToClipboard from 'react-copy-to-clipboard';

import CopyIcon from 'react-icons/lib/io/ios-copy';
import CheckMarkIcon from 'react-icons/lib/io/checkmark';
import TiArrowMaximise from 'react-icons/lib/ti/arrow-maximise';

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
  >
    <div className={s.icons}>
      <CopyToClipboard text={normalizedColor}>
        <a title="Copy to Clipboard">
          {hasCopied ? (
            <CheckMarkIcon style={{color: textColor}} />
          ) : (
            <CopyIcon
              className={s.icon}
              onClick={copiedToClipboard}
              style={{color: textColor}}
            />
          )}
        </a>
      </CopyToClipboard>
      <a title="Expand Color Details">
        <TiArrowMaximise
          style={{color: textColor}}
          className={s.icon}
          onClick={openColorDetail}
        />
      </a>
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

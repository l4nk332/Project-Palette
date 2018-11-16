import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CopyToClipboard from 'react-copy-to-clipboard';
import CopyIcon from 'react-icons/lib/md/content-copy';
import CheckMarkIcon from 'react-icons/lib/md/check';

import s from './Copy.sass';

const Copy = ({textToCopy, hasCopied, copiedToClipboard}) => (
  <CopyToClipboard text={textToCopy}>
    <span className={classNames(s.icon, {[s.hasCopied]: hasCopied})}>
      {hasCopied ? (
        <CheckMarkIcon />
      ) : (
        <CopyIcon onClick={copiedToClipboard} />
      )}
    </span>
  </CopyToClipboard>
);

Copy.propTypes = {
  textToCopy: PropTypes.string.isRequired,
  hasCopied: PropTypes.bool.isRequired,
  copiedToClipboard: PropTypes.func.isRequired,
};

export default Copy;

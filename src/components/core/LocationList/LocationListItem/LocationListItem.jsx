import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {triggerIfEnterKey, openNewTab} from 'utils/misc';

import s from './LocationListItem.sass';

const LocationListItem = ({
  filePath,
  lineNumber,
  projectUrl,
  defaultBranch,
  isDark,
}) => {
  const linkToLine = () => openNewTab(
    `${projectUrl}/blob/${defaultBranch}/${filePath}#L${lineNumber}`,
  );

  return (
    <div
      className={classNames(s.container, isDark ? s.dark : s.light)}
      onClick={linkToLine}
      onKeyDown={event => {
        triggerIfEnterKey(event, linkToLine);
      }}
      tabIndex={0}
      role="link"
    >
      <span className={s.path}>
        {`${filePath}:${lineNumber}`}
      </span>
    </div>
  );
};

LocationListItem.propTypes = {
  filePath: PropTypes.string.isRequired,
  lineNumber: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  projectUrl: PropTypes.string.isRequired,
  defaultBranch: PropTypes.string.isRequired,
  isDark: PropTypes.bool,
};

LocationListItem.defaultProps = {
  isDark: false,
};

export default LocationListItem;

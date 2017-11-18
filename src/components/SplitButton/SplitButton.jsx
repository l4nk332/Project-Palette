import React from 'react';
import PropTypes from 'prop-types';

import {triggerIfEnterKey} from '../../utils/misc';

import './SplitButton.sass';

const SplitButton = ({splits}) => (
  <div className="split-button">
    {splits.map(({text, isActive, handler}, idx) => (
      <span
        key={idx}
        role="button"
        className={isActive ? 'active' : ''}
        tabIndex="0"
        onKeyDown={event => {
          triggerIfEnterKey(event, handler);
        }}
        onClick={handler}
      >
        {text}
      </span>
    ))}
  </div>
);

SplitButton.defaultProps = {
  splits: [],
};

SplitButton.propTypes = {
  splits: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      isActive: PropTypes.bool,
      handler: PropTypes.func,
    }),
  ),
};

export default SplitButton;

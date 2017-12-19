import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {triggerIfEnterKey} from '../../utils/misc';

import s from './SplitButton.sass';

const SplitButton = ({splits}) => (
  <div className={s.container}>
    {splits.map(({text, isActive, handler}, idx) => (
      <span
        key={idx}
        role="button"
        className={classNames({[s.active]: isActive})}
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

import React from 'react';
import PropTypes from 'prop-types';

import s from './SplitView.sass';

const SplitView = ({left, right}) => (
  <section className={s.container}>
    <section className={s.dark}>
      {left}
    </section>
    <section className={s.light}>
      {right}
    </section>
  </section>
);

SplitView.defaultProps = {
  left: null,
  right: null,
};

SplitView.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
};

export default SplitView;

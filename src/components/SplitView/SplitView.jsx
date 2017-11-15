import React from 'react';
import PropTypes from 'prop-types';

import './SplitView.sass';

const SplitView = ({left, right}) => (
  <section className="split-view">
    <section className="half-split dark">
      {left}
    </section>
    <section className="half-split light">
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

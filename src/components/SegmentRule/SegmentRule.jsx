import React from 'react';
import PropTypes from 'prop-types';

import Segment from './Segment/Segment';

import './SegmentRule.sass';

const SegmentRule = ({colors}) => (
  <section className="color-segments">
    {colors.map((color, idx) => <Segment color={color} key={idx} />)}
  </section>
);

SegmentRule.defaultProps = {
  colors: [],
};

SegmentRule.propTypes = {
  colors: PropTypes.array,
};

export default SegmentRule;

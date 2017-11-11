import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import Segment from './Segment/Segment';

import './SegmentRule.sass';

const SegmentRule = ({colors}) => (
  <section className="color-segments">
    {colors.map(color => <Segment color={color} key={shortid.generate()} />)}
  </section>
);

SegmentRule.defaultProps = {
  colors: [],
};

SegmentRule.propTypes = {
  colors: PropTypes.array,
};

export default SegmentRule;

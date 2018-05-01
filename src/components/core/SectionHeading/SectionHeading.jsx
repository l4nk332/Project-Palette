import React from 'react';
import PropTypes from 'prop-types';

import s from './SectionHeading.sass';

const SectionHeading = ({children}) => (
  <React.Fragment>
    <h3 className={s.container}>{children}</h3>
    <hr className={s.dash} />
  </React.Fragment>
);

SectionHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionHeading;

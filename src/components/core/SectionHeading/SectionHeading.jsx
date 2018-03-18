import React from 'react';
import PropTypes from 'prop-types';

import s from './SectionHeading.sass';

const SectionHeading = ({children}) => (
  <section>
    <h3 className={s.container}>{children}</h3>
    <hr className={s.dash} />
  </section>
);

SectionHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionHeading;

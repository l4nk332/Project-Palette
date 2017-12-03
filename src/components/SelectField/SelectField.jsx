import React from 'react';
import TiArrowDown from 'react-icons/lib/ti/arrow-sorted-down';

import './SelectField.sass';

const SelectField = () => (
  <section className='select_container'>
    <header className='select_header'>
      <span className='select_muted'>Sort By</span>
      <span className='select_muted'><TiArrowDown /></span>
    </header>
    <ul className='select_list'>
      <li>None</li>
      <li>Hue</li>
      <li>Saturation</li>
      <li>Lightness</li>
    </ul>
  </section>
);

export default SelectField;

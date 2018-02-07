import React from 'react';
import PropTypes from 'prop-types';

import OptionsIcon from 'react-icons/lib/io/android-options';

import {Popup, Toggleable} from 'components';

import {
  PaletteFilterSelectContainer,
  PaletteSearchContainer,
  PaletteSortSelectContainer,
} from 'containers';

import s from './OptionsPopup.sass';


const OptionsPopup = ({
  togglePopup,
  isOpen,
}) => (
  <Popup
    isOpen={isOpen}
    position={['bottom', 'left']}
    icon={(
      <Toggleable toggled={isOpen}>
        <OptionsIcon onClick={togglePopup} />
      </Toggleable>
    )}
  >
    <section className={s.container}>
      <section className={s.search}>
        <PaletteSearchContainer />
      </section>
      <PaletteSortSelectContainer />
      <PaletteFilterSelectContainer />
    </section>
  </Popup>
);

OptionsPopup.propTypes = {
  togglePopup: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default OptionsPopup;

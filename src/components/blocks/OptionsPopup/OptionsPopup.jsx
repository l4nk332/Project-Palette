import React from 'react';
import PropTypes from 'prop-types';

import OptionsIcon from 'react-icons/lib/io/android-options';

import {Popup, Toggleable} from 'components';

import {
  PaletteFilterSelectContainer,
  PaletteSearchContainer,
  PaletteSortSelectContainer,
  OutsideClickContainer,
} from 'containers';

import s from './OptionsPopup.sass';


const OptionsPopup = ({
  openPopup,
  closePopup,
  isOpen,
}) => (
  <OutsideClickContainer onOutsideClick={closePopup}>
    <Popup
      isOpen={isOpen}
      position={['bottom', 'left']}
      icon={(
        <Toggleable toggled={isOpen}>
          <OptionsIcon onClick={isOpen ? closePopup : openPopup} />
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
  </OutsideClickContainer>
);

OptionsPopup.propTypes = {
  openPopup: PropTypes.func.isRequired,
  closePopup: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default OptionsPopup;

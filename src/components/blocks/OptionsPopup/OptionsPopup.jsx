import React from 'react';
import PropTypes from 'prop-types';

import OptionsIcon from 'react-icons/lib/io/android-options';

import {
  Popup,
  Toggleable,
  PaletteFilterSelect,
} from 'components';

import {
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
        <section className={s.option}>
          <PaletteSearchContainer />
        </section>
        <section className={s.option}>
          <PaletteSortSelectContainer />
        </section>
        <section className={s.option}>
          <PaletteFilterSelect />
        </section>
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

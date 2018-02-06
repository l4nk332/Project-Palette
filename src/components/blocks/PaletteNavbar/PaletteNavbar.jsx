import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';

import {
  Navbar,
  NavigateBack,
} from 'components';

import {
  PaletteFilterSelectContainer,
  PaletteSearchContainer,
  PaletteSortSelectContainer,
  DownloadDropdownContainer,
  OptionsPopupContainer,
} from 'containers';


const PaletteNavbar = ({
  projectName,
  navigateBackHandler,
  filteredSortedPalette,
}) => (
  <Media query="(max-width: 829px)">
    { matches => (
      matches ? (
        <Navbar>
          <NavigateBack
            text={projectName}
            clickHandler={navigateBackHandler}
          />
          <OptionsPopupContainer>
            <section style={{padding: '0.5em'}}>
              <section style={{marginBottom: '1em'}}>
                <PaletteSearchContainer />
              </section>
              <section style={{marginBottom: '1em'}}>
                <PaletteSortSelectContainer />
              </section>
              <PaletteFilterSelectContainer />
            </section>
          </OptionsPopupContainer>
        </Navbar>
      ) : (
        <Navbar>
          <NavigateBack
            text={projectName}
            clickHandler={navigateBackHandler}
          />
          <PaletteSortSelectContainer />
          <PaletteFilterSelectContainer />
          <PaletteSearchContainer />
          <DownloadDropdownContainer
            projectName={projectName}
            palette={filteredSortedPalette}
          />
        </Navbar>
      )
    )}
  </Media>
);

PaletteNavbar.propTypes = {
  projectName: PropTypes.string.isRequired,
  navigateBackHandler: PropTypes.func.isRequired,
  filteredSortedPalette: PropTypes.object.isRequired,
};

export default PaletteNavbar;

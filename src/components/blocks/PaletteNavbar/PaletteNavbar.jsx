import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';

import {
  Navbar,
  NavigateBack,
  PaletteFilterSelect,
} from 'components';

import {
  PaletteSearchContainer,
  PaletteSortSelectContainer,
  DownloadDropdownContainer,
  OptionsPopupContainer,
  PaletteViewToggleContainer,
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
          <OptionsPopupContainer />
          <PaletteViewToggleContainer />
          <DownloadDropdownContainer
            projectName={projectName}
            palette={filteredSortedPalette}
          />
        </Navbar>
      ) : (
        <Navbar>
          <NavigateBack
            text={projectName}
            clickHandler={navigateBackHandler}
          />
          <PaletteSortSelectContainer />
          <PaletteFilterSelect />
          <PaletteSearchContainer />
          <PaletteViewToggleContainer />
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

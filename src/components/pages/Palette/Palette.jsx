import React from 'react';
import PropTypes from 'prop-types';

import {
  DetailContainer,
  ScrollTopContainer,
} from 'containers';

import {
  ColorGrid,
  PaletteNavbar,
} from 'components';


const Palette = ({
  locations,
  colorDetail,
  projectName,
  navigateBackHandler,
  filteredSortedPalette,
  filteredSortedColorList,
  openColorDetail,
}) => (
  <main>
    <ScrollTopContainer isVisible={!colorDetail}>
      <PaletteNavbar
        projectName={projectName}
        navigateBackHandler={navigateBackHandler}
        filteredSortedPalette={filteredSortedPalette}
      />
      <ColorGrid
        colors={filteredSortedColorList}
        openColorDetail={openColorDetail}
      />
    </ScrollTopContainer>
    {
      colorDetail &&
      <DetailContainer
        locations={locations}
        filteredSortedColorList={filteredSortedColorList}
      />
    }
  </main>
);

Palette.defaultProps = {
  colorDetail: null,
  locations: {locations: []},
};

Palette.propTypes = {
  locations: PropTypes.shape({
    locations: PropTypes.arrayOf(PropTypes.object),
  }),
  colorDetail: PropTypes.string,
  projectName: PropTypes.string.isRequired,
  navigateBackHandler: PropTypes.func.isRequired,
  filteredSortedPalette: PropTypes.object.isRequired,
  filteredSortedColorList: PropTypes.arrayOf(PropTypes.string).isRequired,
  openColorDetail: PropTypes.func.isRequired,
};

export default Palette;

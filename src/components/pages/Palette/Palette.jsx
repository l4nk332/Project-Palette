import React from 'react';
import PropTypes from 'prop-types';

import {
  DetailContainer,
  ScrollTopContainer,
  ReportContainer,
} from 'containers';

import {
  ColorGrid,
  PaletteNavbar,
  FixedMessage,
  ColorizedText,
} from 'components';

import {GRID, REPORT} from 'utils/constants';


const Palette = ({
  locations,
  colorDetail,
  projectName,
  navigateBackHandler,
  filteredSortedPalette,
  filteredSortedColorList,
  openColorDetail,
  paletteView,
}) => (
  <main>
    <ScrollTopContainer isVisible={!colorDetail}>
      <PaletteNavbar
        projectName={projectName}
        navigateBackHandler={navigateBackHandler}
        filteredSortedPalette={filteredSortedPalette}
      />
      {
        !!filteredSortedColorList.length && paletteView === GRID && (
          <ColorGrid
            colors={filteredSortedColorList}
            openColorDetail={openColorDetail}
          />
        )
      }
      {
        !!filteredSortedColorList.length && paletteView === REPORT && (
          <ReportContainer
            colors={filteredSortedColorList}
            openColorDetail={openColorDetail}
            palette={filteredSortedPalette}
          />
        )
      }
      {!filteredSortedColorList.length && (
        <FixedMessage>
          No <ColorizedText>colors</ColorizedText> to display...
        </FixedMessage>
      )}
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
  paletteView: PropTypes.oneOf([GRID, REPORT]).isRequired,
};

export default Palette;

import React from 'react';
import PropTypes from 'prop-types';

import DownloadIcon from 'react-icons/lib/io/stats-bars';
import GridIcon from 'react-icons/lib/md/apps';

import {GRID, REPORT} from 'utils/constants';


const PaletteViewToggle = ({
  paletteView,
  toggleView,
}) => (
  paletteView === REPORT
    ? (
      <GridIcon onClick={toggleView} />
    ) : (
      <DownloadIcon onClick={toggleView} />
    )
);

PaletteViewToggle.propTypes = {
  paletteView: PropTypes.oneOf([GRID, REPORT]).isRequired,
  toggleView: PropTypes.func.isRequired,
};

export default PaletteViewToggle;

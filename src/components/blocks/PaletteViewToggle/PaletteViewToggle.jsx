import React from 'react';
import PropTypes from 'prop-types';

import DownloadIcon from 'react-icons/lib/io/stats-bars';
import GridIcon from 'react-icons/lib/md/apps';

import {Toggleable} from 'components';

import {GRID, REPORT} from 'utils/constants';

import s from './PaletteViewToggle.sass';


const PaletteViewToggle = ({
  paletteView,
  toggleView,
}) => (
  <section className={s.container}>
    <Toggleable toggled>
      {paletteView === REPORT
        ? (
          <GridIcon onClick={toggleView} />
        ) : (
          <DownloadIcon onClick={toggleView} />
        )
      }
    </Toggleable>
  </section>
);

PaletteViewToggle.propTypes = {
  paletteView: PropTypes.oneOf([GRID, REPORT]).isRequired,
  toggleView: PropTypes.func.isRequired,
};

export default PaletteViewToggle;

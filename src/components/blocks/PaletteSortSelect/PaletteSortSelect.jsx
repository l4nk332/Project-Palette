import React from 'react';
import PropTypes from 'prop-types';

import SortDescIcon from 'react-icons/lib/fa/sort-amount-desc';
import SortAscIcon from 'react-icons/lib/fa/sort-amount-asc';

import {
  USAGE,
  BRIGHTNESS,
  LUMINESCENCE,
  ALPHABETICAL,
  TRANSPARENCY,
  HUE,
  ASCENDING,
  DESCENDING,
} from 'utils/constants';

import {SelectFieldContainer} from 'containers';

import {IconAssistedField, Toggleable} from 'components';


const PaletteSortSelect = ({
  sortBy,
  sortOrder,
  updateSortSelect,
  setSortOrderAsc,
  setSortOrderDesc,
}) => (
  <IconAssistedField
    Field={
      <SelectFieldContainer
        placeholder="Sort By"
        values={[
          {
            label: 'Usage',
            value: USAGE,
            selected: sortBy === USAGE,
          },
          {
            label: 'Brightness',
            value: BRIGHTNESS,
            selected: sortBy === BRIGHTNESS,
          },
          {
            label: 'Luminescence',
            value: LUMINESCENCE,
            selected: sortBy === LUMINESCENCE,
          },
          {
            label: 'Transparency',
            value: TRANSPARENCY,
            selected: sortBy === TRANSPARENCY,
          },
          {
            label: 'Alphabetical',
            value: ALPHABETICAL,
            selected: sortBy === ALPHABETICAL,
          },
          {
            label: 'Hue',
            value: HUE,
            selected: sortBy === HUE,
          },
        ]}
        clickHandler={updateSortSelect}
        width="150px"
      />
    }
    Icon={
      <Toggleable toggled>
        {
          sortOrder === ASCENDING
            ? <SortAscIcon onClick={setSortOrderDesc} />
            : <SortDescIcon onClick={setSortOrderAsc} />
        }
      </Toggleable>
    }
  />
);

PaletteSortSelect.propTypes = {
  sortBy: PropTypes.oneOf([
    USAGE,
    BRIGHTNESS,
    LUMINESCENCE,
    TRANSPARENCY,
    HUE,
    ALPHABETICAL,
  ]).isRequired,
  sortOrder: PropTypes.oneOf([ASCENDING, DESCENDING]).isRequired,
  updateSortSelect: PropTypes.func.isRequired,
  setSortOrderAsc: PropTypes.func.isRequired,
  setSortOrderDesc: PropTypes.func.isRequired,
};

export default PaletteSortSelect;

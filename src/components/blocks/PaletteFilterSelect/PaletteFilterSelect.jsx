import React from 'react';
import PropTypes from 'prop-types';

import FilterIcon from 'react-icons/lib/fa/filter';

import {
  LIGHTNESS,
  DARKNESS,
} from 'utils/constants';

import {SelectFieldContainer} from 'containers';

import {IconAssistedField, Toggleable} from 'components';


const PaletteFilterSelect = ({
  filterBy,
  updateFilterSelect,
  filterByEnabled,
  toggleFilter,
}) => (
  <IconAssistedField
    Field={
      <SelectFieldContainer
        placeholder="Filter By"
        values={[
          {
            label: 'Lightness',
            value: LIGHTNESS,
            selected: filterBy === LIGHTNESS,
          },
          {
            label: 'Darkness',
            value: DARKNESS,
            selected: filterBy === DARKNESS,
          },
        ]}
        clickHandler={updateFilterSelect}
        width="150px"
      />
    }
    Icon={
      <Toggleable toggled={filterByEnabled}>
        <FilterIcon onClick={toggleFilter} />
      </Toggleable>
    }
  />
);

PaletteFilterSelect.defaultProps = {
  filterBy: null,
};

PaletteFilterSelect.propTypes = {
  filterBy: PropTypes.string,
  updateFilterSelect: PropTypes.func.isRequired,
  filterByEnabled: PropTypes.bool.isRequired,
  toggleFilter: PropTypes.func.isRequired,
};


export default PaletteFilterSelect;

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {
  LIGHTNESS,
  DARKNESS,
  NONE,
} from 'utils/constants';

import {updateFilterSelect} from 'redux/actionCreators';
import {SelectFieldContainer} from 'containers';

import {DecoratedField} from 'components';

const PaletteFilterSelect = ({
  filterBy,
  updateFilterSelect,
}) => (
  <DecoratedField
    Field={
      <SelectFieldContainer
        placeholder="Select..."
        values={[
          {
            label: 'None',
            value: NONE,
            selected: filterBy === NONE,
          },
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
    label="Filter By"
  />
);

PaletteFilterSelect.defaultProps = {
  filterBy: null,
};

PaletteFilterSelect.propTypes = {
  filterBy: PropTypes.string,
  updateFilterSelect: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filterBy: state.filters.filterBy,
});

const mapDispatchToProps = {
  updateFilterSelect,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PaletteFilterSelect),
);

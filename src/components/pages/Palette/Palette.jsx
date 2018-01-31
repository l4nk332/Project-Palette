import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';

import SortDescIcon from 'react-icons/lib/fa/sort-amount-desc';
import SortAscIcon from 'react-icons/lib/fa/sort-amount-asc';
import FilterIcon from 'react-icons/lib/fa/filter';
import OptionsIcon from 'react-icons/lib/io/android-options';

import {
  USAGE,
  BRIGHTNESS,
  LUMINESCENCE,
  ALPHABETICAL,
  TRANSPARENCY,
  LIGHTNESS,
  DARKNESS,
  ASCENDING,
  DESCENDING,
} from 'utils/constants';

import {
  DetailContainer,
  SelectFieldContainer,
  DownloadDropdownContainer,
} from 'containers';

import {
  ColorGrid,
  Navbar,
  TextField,
  IconAssistedField,
  Toggleable,
  NavigateBack,
  Popup,
} from 'components';


const Palette = ({
  locations,
  colorDetail,
  projectName,
  navigateBackHandler,
  popUpOpen,
  togglePopup,
  filterText,
  updateFilterText,
  sortBy,
  updateSortSelect,
  filterBy,
  updateFilterSelect,
  sortOrder,
  updateSortOrder,
  filterByEnabled,
  disableFilterSelect,
  enableFilterSelect,
  filteredSortedPalette,
  filteredSortedColorList,
  openColorDetail,
}) => (
  <main>
    <div style={{visibility: colorDetail ? 'hidden' : 'visible'}}>
      <Media query="(max-width: 829px)">
        { matches => (
          matches ? (
            <Navbar>
              <NavigateBack
                text={projectName}
                clickHandler={navigateBackHandler}
              />
              <Popup
                isOpen={popUpOpen}
                position={['bottom', 'left']}
                icon={(
                  <Toggleable toggled={popUpOpen}>
                    <OptionsIcon
                      onClick={togglePopup}
                    />
                  </Toggleable>
                )}
              >
                <section style={{padding: '0.5em'}}>
                  <section style={{marginBottom: '1em'}}>
                    <TextField
                      placeholderText="search..."
                      value={filterText}
                      changeHandler={event => {
                        const {value} = event.target;
                        updateFilterText(value);
                      }}
                      focusHandler={() => {
                        updateFilterText('');
                      }}
                      scalesDown
                    />
                  </section>
                  <section style={{marginBottom: '1em'}}>
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
                      ]}
                      clickHandler={updateSortSelect}
                      width="100%"
                    />
                  </section>
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
                    width="100%"
                  />
                </section>
              </Popup>
            </Navbar>
          ) : (
            <Navbar>
              <NavigateBack
                text={projectName}
                clickHandler={navigateBackHandler}
              />
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
                    ]}
                    clickHandler={updateSortSelect}
                    width="132px"
                  />
                }
                Icon={
                  <Toggleable toggled>
                    {
                      sortOrder === ASCENDING
                        ? <SortAscIcon onClick={() => { updateSortOrder(DESCENDING); }} />
                        : <SortDescIcon onClick={() => { updateSortOrder(ASCENDING); }} />
                    }
                  </Toggleable>
                }
              />
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
                    width="132px"
                  />
                }
                Icon={
                  <Toggleable toggled={filterByEnabled}>
                    <FilterIcon onClick={() => {
                      if (filterByEnabled) {
                        disableFilterSelect();
                      } else {
                        enableFilterSelect(filterBy);
                      }
                    }}
                    />
                  </Toggleable>
                }
              />
              <TextField
                placeholderText="search..."
                value={filterText}
                changeHandler={event => {
                  const {value} = event.target;
                  updateFilterText(value);
                }}
                focusHandler={() => {
                  updateFilterText('');
                }}
                scalesDown
              />
              <DownloadDropdownContainer
                projectName={projectName}
                palette={filteredSortedPalette}
              />
            </Navbar>
          )
        )}
      </Media>
      <ColorGrid
        colors={filteredSortedColorList}
        openColorDetail={openColorDetail}
      />
    </div>
    {colorDetail && <DetailContainer locations={locations} />}
  </main>
);

Palette.defaultProps = {
  colorDetail: null,
  filterText: '',
  filterBy: null,
  locations: {locations: []},
};

Palette.propTypes = {
  locations: PropTypes.shape({
    locations: PropTypes.arrayOf(PropTypes.object),
  }),
  colorDetail: PropTypes.string,
  projectName: PropTypes.string.isRequired,
  navigateBackHandler: PropTypes.func.isRequired,
  popUpOpen: PropTypes.bool.isRequired,
  togglePopup: PropTypes.func.isRequired,
  filterText: PropTypes.string,
  updateFilterText: PropTypes.func.isRequired,
  sortBy: PropTypes.oneOf([
    USAGE,
    BRIGHTNESS,
    LUMINESCENCE,
    TRANSPARENCY,
    ALPHABETICAL,
  ]).isRequired,
  updateSortSelect: PropTypes.func.isRequired,
  filterBy: PropTypes.string,
  updateFilterSelect: PropTypes.func.isRequired,
  sortOrder: PropTypes.oneOf([ASCENDING, DESCENDING]).isRequired,
  updateSortOrder: PropTypes.func.isRequired,
  filterByEnabled: PropTypes.bool.isRequired,
  disableFilterSelect: PropTypes.func.isRequired,
  enableFilterSelect: PropTypes.func.isRequired,
  filteredSortedPalette: PropTypes.object.isRequired,
  filteredSortedColorList: PropTypes.arrayOf(PropTypes.string).isRequired,
  openColorDetail: PropTypes.func.isRequired,
};

export default Palette;

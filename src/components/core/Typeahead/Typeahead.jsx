import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import isEqual from 'lodash/isEqual';
import has from 'lodash/has';
import get from 'lodash/get';

import {triggerIfEnterKey} from 'utils/misc';
import {OutsideClickContainer} from 'containers';

import s from './Typeahead.sass';

const debouncedFetch = debounce(
  async (
    searchValue,
    fetchValues,
    updateLoading,
    updateOptions,
    updateSearchCache,
  ) => {
    const newOptions = await fetchValues(searchValue);
    updateOptions(newOptions);
    updateSearchCache(newOptions);
    updateLoading(false);
  },
  1000,
);

// TODO: Add logic to allow for next set of results to be fetched.
// TODO: Add logic to show 'Press Enter to Submit...' and 'No results found...'
// TODO: Add prop to allow for debounce value to be specified.

const Typeahead = ({
  placeholder,
  loadingText,
  emptyResultsText,
  onSelect,
  fetchValues,
  renderSelection,
  renderOption,
  filterOption,
  style,
}) => {
  const [searchValue, updateSearch] = useState('');
  const [searchCache, updateCache] = useState({});
  const [selectedValue, updateSelectedValue] = useState(null);
  const [isLoading, updateLoading] = useState(false);
  const [isOpen, updateIsOpen] = useState(false);
  const [options, updateOptions] = useState([]);
  const inputRef = useRef(null);

  const updateSearchCache = newOptions => updateCache({
    ...searchCache,
    [searchValue]: newOptions,
  });

  const decoratedFetch = () => {
    updateLoading(true);

    debouncedFetch(
      searchValue,
      fetchValues,
      updateLoading,
      updateOptions,
      updateSearchCache,
    );
  };

  const handleSelect = option => {
    updateSelectedValue(option);
    updateSearch('');
    updateIsOpen(false);
    onSelect(option);
  };

  const handleOpen = () => {
    updateIsOpen(true);
  };

  const shouldShowLoading = isOpen && isLoading;
  const shouldShowPrompt = isOpen && !has(searchCache, searchValue);
  const shouldShowEmpty = isOpen && has(searchCache, searchValue) && options.length === 0;
  const shouldShowCachedResults = isOpen && has(searchCache, searchValue) && options.length;
  const shouldShowResults = isOpen && options.length;

  const searchPrompt = (
    <li className={s.readOnly}>
      {`Press Enter to search${searchValue && ': '}`}
      <strong>{searchValue}</strong>
    </li>
  );

  return (
    <OutsideClickContainer onOutsideClick={() => updateIsOpen(false)}>
      <section className={s.container} style={style}>
        {isOpen || !selectedValue
          ? (
            <input
              ref={inputRef}
              className={classNames(s.input, {[s.isOpen]: isOpen})}
              type="text"
              value={searchValue}
              placeholder={placeholder}
              onChange={event => updateSearch(event.currentTarget.value)}
              {...(
                !has(searchCache, searchValue) && {
                  onKeyDown(event) {
                    triggerIfEnterKey(event, decoratedFetch);
                  },
                }
              )}
              onFocus={handleOpen}
            />
          ) : (
            <section
              className={s.value}
              onClick={handleOpen}
              onKeyDown={event => triggerIfEnterKey(event, handleOpen)}
              tabIndex="0"
              role="Listbox"
            >
              {selectedValue ? renderSelection(selectedValue) : placeholder}
            </section>
          )
        }
        <ConditionalRender
          conditions={[
            {
              condition: shouldShowLoading,
              content: (
                <ul className={s.options}>
                  <li className={s.readOnly}>{loadingText}</li>
                </ul>
              ),
            },
            {
              condition: shouldShowPrompt,
              content: (
                <ul className={s.options}>
                  {searchPrompt}
                </ul>
              ),
            },
            {
              condition: shouldShowEmpty,
              content: (
                <ul className={s.options}>
                  <li className={s.readOnly}>{emptyResultsText}</li>
                </ul>
              ),
            },
            {
              condition: shouldShowCachedResults,
              content: () => (
                <ul className={s.options}>
                  {searchCache[searchValue]
                    .filter(option => (
                      filterOption(option, searchValue)
                    ))
                    .map((option, idx) => (
                      <li
                        key={idx}
                        className={classNames(
                          s.option,
                          {[s.selected]: isEqual(option, selectedValue)},
                        )}
                        onClick={() => handleSelect(option)}
                        onKeyDown={event => {
                          triggerIfEnterKey(event, handleSelect, option);
                        }}
                      >
                        {renderOption(option)}
                      </li>
                    ))
                  }
                </ul>
              ),
            },
            {
              condition: shouldShowResults,
              content: (
                <ul className={s.options}>
                  {searchPrompt}
                  {options
                    .filter(option => (
                      filterOption(option, searchValue)
                    ))
                    .map((option, idx) => (
                      <li
                        key={idx}
                        className={classNames(
                          s.option,
                          {[s.selected]: isEqual(option, selectedValue)},
                        )}
                        onClick={() => handleSelect(option)}
                        onKeyDown={event => {
                          triggerIfEnterKey(event, handleSelect, option);
                        }}
                      >
                        {renderOption(option)}
                      </li>
                    ))
                  }
                </ul>
              ),
            },
          ]}
        />
      </section>
    </OutsideClickContainer>
  );
};

Typeahead.propTypes = {
  placeholder: PropTypes.string,
  loadingText: PropTypes.string,
  emptyResultsText: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  fetchValues: PropTypes.func.isRequired,
  renderSelection: PropTypes.func,
  renderOption: PropTypes.func,
  filterOption: PropTypes.func,
  style: PropTypes.object,
};

Typeahead.defaultProps = {
  placeholder: 'Search...',
  loadingText: 'Loading...',
  emptyResultsText: 'No results found...',
  renderSelection: value => value,
  renderOption: label => label,
  filterOption: () => true,
  style: {},
};

export default Typeahead;

const ConditionalRender = ({conditions, fallback = null}) => {
  const firstTruthy = conditions.find(({condition}) => Boolean(condition));
  return (
    firstTruthy && typeof firstTruthy.content === 'function'
      ? firstTruthy.content()
      : get(firstTruthy, 'content', fallback)
  );
};

ConditionalRender.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.shape({
    condition: PropTypes.any,
    content: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  })).isRequired,
  fallback: PropTypes.node,
};

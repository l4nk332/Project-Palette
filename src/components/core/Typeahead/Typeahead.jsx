import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import isEqual from 'lodash/isEqual';

import {triggerIfEnterKey} from 'utils/misc';

import s from './Typeahead.sass';

const debouncedFetch = debounce(
  async (fetchPromise, updateLoading, updateOptions) => {
    const newOptions = await fetchPromise;
    updateOptions(newOptions);
    updateLoading(false);
  },
  500,
);

const Typeahead = ({
  placeholder,
  onSelect,
  fetchValues,
  renderSelection,
  renderOption,
  filterOption,
  style,
}) => {
  const [searchValue, updateSearch] = useState('');
  const [selectedValue, updateSelectedValue] = useState(null);
  const [isLoading, updateLoading] = useState(false);
  const [isOpen, updateIsOpen] = useState(false);
  const [options, updateOptions] = useState([]);

  useEffect(() => {
    updateLoading(true);
    debouncedFetch(fetchValues(searchValue), updateLoading, updateOptions);
  }, [searchValue]);

  const handleSelect = option => {
    updateSelectedValue(option);
    updateSearch('');
    updateIsOpen(false);
    onSelect(option);
  };

  return (
    <section className={s.container} style={style}>
      {isOpen
        ? (
          <React.Fragment>
            <input
              className={s.input}
              type="text"
              value={searchValue}
              placeholder={placeholder}
              onChange={event => updateSearch(event.currentTarget.value)}
            />
            {isLoading && <p>Loading...</p>}
            {Boolean(options.length) && !isLoading && (
              <ul className={s.options}>
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
            )}
          </React.Fragment>
        ) : (
          <section
            className={s.value}
            onClick={() => updateIsOpen(true)}
            onKeyDown={event => {
              triggerIfEnterKey(event, updateIsOpen, true);
            }}
            tabIndex="0"
            role="Listbox"
          >
            {selectedValue ? renderSelection(selectedValue) : placeholder}
          </section>
        )
      }
    </section>
  );
};

Typeahead.propTypes = {
  placeholder: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  fetchValues: PropTypes.func.isRequired,
  renderSelection: PropTypes.func,
  renderOption: PropTypes.func,
  filterOption: PropTypes.func,
  style: PropTypes.object,
};

Typeahead.defaultProps = {
  placeholder: 'Search...',
  renderSelection: value => value,
  renderOption: label => label,
  filterOption: () => true,
  style: {},
};

export default Typeahead;

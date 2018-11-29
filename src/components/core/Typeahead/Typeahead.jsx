import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import isEqual from 'lodash/isEqual';

import {triggerIfEnterKey} from 'utils/misc';
import {OutsideClickContainer} from 'containers';

import s from './Typeahead.sass';

const debouncedFetch = debounce(
  async (searchValue, fetchValues, updateLoading, updateOptions) => {
    const newOptions = await fetchValues(searchValue);
    updateOptions(newOptions);
    updateLoading(false);
  },
  1000,
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
  const inputRef = useRef(null);

  useEffect(() => {
    updateLoading(true);
    debouncedFetch(searchValue, fetchValues, updateLoading, updateOptions);
  }, [searchValue]);

  const handleSelect = option => {
    updateSelectedValue(option);
    updateSearch('');
    updateIsOpen(false);
    onSelect(option);
  };

  const handleOpen = () => {
    updateIsOpen(true);
    // inputRef.current.focus();
  };

  return (
    <OutsideClickContainer onOutsideClick={() => updateIsOpen(false)}>
      <section className={s.container} style={style}>
        {isOpen || !selectedValue
          ? (
            <input
              ref={inputRef}
              className={s.input}
              type="text"
              value={searchValue}
              placeholder={placeholder}
              onChange={event => updateSearch(event.currentTarget.value)}
              onFocus={handleOpen}
            />
          ) : (
            <section
              className={s.value}
              onClick={handleOpen}
              onKeyDown={event => {
                triggerIfEnterKey(event, handleOpen);
              }}
              tabIndex="0"
              role="Listbox"
            >
              {selectedValue ? renderSelection(selectedValue) : placeholder}
            </section>
          )
        }
        {isOpen && searchValue && (
          <ul className={s.options}>
            {
              isLoading
                ? <li className={s.readOnly}>Loading...</li>
                : options.length === 0
                  ? <li className={s.readOnly}>No Results Found...</li>
                  : (options
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
                      )))
            }
          </ul>
        )}
      </section>
    </OutsideClickContainer>
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

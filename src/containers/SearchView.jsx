import React from 'react';
import PropTypes from 'prop-types';

import Search from '../pages/Search/Search';

class SearchView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  updateSearch = event => {
    const newSearch = event.target.value;
    this.setState({search: newSearch});
  };

  handleEnterKeySubmission = event => {
    const isEnterKey = event.keyCode === 13;
    const trimmedSearch = this.state.search.trim();

    if (trimmedSearch && isEnterKey) {
      this.submitSearchQuery();
    }
  };

  submitSearchQuery = () => {
    const {search} = this.state;
    this.props.history.push(search);
  };

  render = () => <Search />
}

SearchView.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default SearchView;

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import SplitForm from '../components/SplitForm/SplitForm';
import FlexContainer from '../components/FlexContainer/FlexContainer';

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

  render = () => <FlexContainer><SplitForm /></FlexContainer>
}

SearchView.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default SearchView;

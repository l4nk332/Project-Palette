import React from 'react';
import {Link} from 'react-router-dom';

import SearchBox from '../components/SearchBox/SearchBox';
import Button from '../components/Button/Button';

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

  render() {
    return (
      <div>
        <SearchBox
          placeholderText="l4nk332/Project-Palette"
          keyDownHandler={this.handleEnterKeySubmission}
          keyUpHandler={this.updateSearch}
        />
        {this.state.search.trim() ? (
          <Link to={`/${this.state.search}`}>
            <Button isDisabled={false}>Analyze</Button>
          </Link>
        ) : (
          <Button isDisabled>Analyze</Button>
        )}
      </div>
    );
  }
}

export default SearchView;

import React from 'react'
import { connect } from 'react-redux'

import {
  setIsLoading,
  setIsNotLoading,
  setProjectUrl,
  asyncFetchColorPalette,
} from '../redux/actionCreators'

import SearchBox from '../components/SearchBox/SearchBox'
import Button from '../components/Button/Button'


class SearchView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
    }

    this.updateSearch = this.updateSearch.bind(this)
    this.handleEnterKeySubmission = this.handleEnterKeySubmission.bind(this)
    this.submitSearchQuery = this.submitSearchQuery.bind(this)
  }

  updateSearch(event) {
    const newSearch = event.target.value
    this.setState({ search: newSearch })
  }

  handleEnterKeySubmission(event) {
    const isEnterKey = event.keyCode === 13

    if (isEnterKey) {
      this.submitSearchQuery()
    }
  }

  submitSearchQuery() {
    const { search } = this.state
    this.props.asyncFetchColorPalette(search)
  }

  render() {
    return (
      <div>
        <SearchBox
          placeholderText="l4nk332/Project-Palette"
          keyDownHandler={this.handleEnterKeySubmission}
          keyUpHandler={this.updateSearch}
        />
        <Button
          clickHandler={this.submitSearchQuery}
          isDisabled={!this.state.search.length}
        >
          Analyze
        </Button>
      </div>
    )
  }
}


const mapDispatchToProps = {
  setIsLoading,
  setIsNotLoading,
  setProjectUrl,
  asyncFetchColorPalette,
}

export default connect(null, mapDispatchToProps)(SearchView)

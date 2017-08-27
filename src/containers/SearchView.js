import React from 'react'

import { searchGitHubProject, getProjectPalette } from '../utils/requests'

import SearchBox from '../components/SearchBox/SearchBox.jsx'
import Button from '../components/Button/Button.jsx'

import { mockPaletteResponse } from '../utils/requests'


export default class SearchView extends React.Component {
  constructor({setPalette}) {
    super()
    this.state = {
      search: ''
    }

    this.setPalette = setPalette

    this.updateSearch = this.updateSearch.bind(this)
    this.handleEnterKeySubmission = this.handleEnterKeySubmission.bind(this)
    this.submitSearchQuery = this.submitSearchQuery.bind(this)
  }

  updateSearch(event) {
    const newSearch = event.target.value
    this.setState({search: newSearch})
  }

  handleEnterKeySubmission(event) {
    const isEnterKey = event.keyCode === 13

    if (isEnterKey) {
      this.submitSearchQuery()
    }
  }

  submitSearchQuery() {
    const search = this.state.search

    if (true) {
      this.setPalette(mockPaletteResponse())
      return
    }

    if (search.length) {
      searchGitHubProject(search)
        .then(response => ({
          httpsCloneURL: response.data.clone_url,
          repoURI: response.data.full_name
        }))
        .then(getProjectPalette)
        .then(response => (this.setPalette(response.data)))
        .catch((error) => {
          alert(error)
        })
    }
  }

  render() {
    return (
      <div>
        <SearchBox
          placeholderText='l4nk332/Project-Palette'
          keyDownHandler={this.handleEnterKeySubmission}
          keyUpHandler={this.updateSearch}
        />
        <Button
          clickHandler={this.submitSearchQuery}
          isDisabled={!this.state.search.length}>
          Analyze
        </Button>
      </div>
    )
  }
}

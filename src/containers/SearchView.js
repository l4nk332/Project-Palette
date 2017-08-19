import React from 'react'

import { searchGitHubProject } from '../utils/requests'

import Container from '../components/Container.jsx'


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }

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

    if (search.length) {
      searchGitHubProject(search)
        .then((response) => {
          console.log(search, response)
        }).catch((error) => {
          console.error(error)
        })
    }
  }

  render() {
    return (
      <Container isLoading={false}>
        <input
          type='text'
          placeholder='l4nk332/Project-Palette'
          onKeyDown={this.handleEnterKeySubmission}
          onKeyUp={this.updateSearch}
        />
        <button
          onClick={this.submitSearchQuery}
          disabled={!this.state.search.length}>
          Analyze
        </button>
      </Container>
    )
  }
}

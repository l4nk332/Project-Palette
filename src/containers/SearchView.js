import React from 'react'
import { connect } from 'react-redux'

import { searchGitHubProject, getProjectPalette } from '../utils/requests'
import { setIsLoading, setIsNotLoading } from '../redux/actionCreators'

import SearchBox from '../components/SearchBox/SearchBox.jsx'
import Button from '../components/Button/Button.jsx'

import { mockPaletteResponse } from '../utils/requests'


class SearchView extends React.Component {
  constructor(props) {
    super(props)
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

    this.props.setIsLoading()

    if (true) {
      setTimeout(() => {
        this.props.setPalette(mockPaletteResponse())
        this.props.setIsNotLoading()
      }, 2000)
    }

    // if (search.length) {
    //   searchGitHubProject(search)
    //     .then((response) => {
    //       this.props.setProjectURL(response.data.html_url)
    //       return {
    //         httpsCloneURL: response.data.clone_url,
    //         repoURI: response.data.full_name
    //       }
    //     })
    //     .then(getProjectPalette)
    //     .then(response => (this.props.setPalette(response.data)))
    //     .catch((error) => {
    //       alert(error)
    //     })
    //     .then(this.props.setIsNotLoading)
    // }
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


const mapDispatchToProps = {
  setIsLoading,
  setIsNotLoading,
}

export default connect(null, mapDispatchToProps)(SearchView)

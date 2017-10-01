import React from 'react'
import ReactDOM from 'react-dom'

import { SEARCH_VIEW, PALETTE_VIEW } from '../utils/constants'

import SearchView from './SearchView'
import PaletteView from './PaletteView'

import Container from '../components/Container/Container.jsx'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      currentView: SEARCH_VIEW,
      palette: {},
      projectURL: ''
    }

    this.setIsLoading = this.setIsLoading.bind(this)
    this.setPalette = this.setPalette.bind(this)
    this.setProjectURL = this.setProjectURL.bind(this)
    this.renderCurrentView = this.renderCurrentView.bind(this)
  }

  componentDidMount() {
    this.setIsLoading(false)
  }

  setIsLoading(isLoading) {
    this.setState({isLoading})
  }

  setPalette(palette) {
    this.setState({palette}, () => {
      this.setState({currentView: PALETTE_VIEW})
    })
  }

  setProjectURL(url) {
    this.setState({projectURL: url})
  }

  renderCurrentView() {
    switch (this.state.currentView) {
      case SEARCH_VIEW:
        return (
          <SearchView
            setPalette={this.setPalette}
            setProjectURL={this.setProjectURL}
          />
        )
      case PALETTE_VIEW:
        return (
          <PaletteView
            palette={this.state.palette}
            projectURL={this.state.projectURL}
            expandColor={this.expandColor}
          />
        )
      default:
        console.error('Unhandled view has been set.')
      }
  }

  render() {
    return (
      <Container isLoading={this.state.isLoading}>
        {this.renderCurrentView()}
      </Container>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

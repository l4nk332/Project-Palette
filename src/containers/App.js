import React from 'react'
import ReactDOM from 'react-dom'

import { SEARCH_VIEW, PALETTE_VIEW, DETAIL_VIEW } from '../utils/constants'

import SearchView from './SearchView'
import PaletteView from './PaletteView'
import DetailView from './DetailView'

import Container from '../components/Container/Container.jsx'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      currentView: SEARCH_VIEW,
      palette: {},
      expandedColor: null
    }

    this.setIsLoading = this.setIsLoading.bind(this)
    this.setPalette = this.setPalette.bind(this)
    this.expandColor = this.expandColor.bind(this)
    this.clearExpanded = this.clearExpanded.bind(this)
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

  clearExpanded() {
    this.setState({currentView: PALETTE_VIEW}, () => {
      this.setState({expandedColor: null})
    })
  }

  expandColor(color) {
    this.setState({expandedColor: color}, () => {
      this.setState({currentView: DETAIL_VIEW})
    })
  }

  renderCurrentView() {
    switch (this.state.currentView) {
      case SEARCH_VIEW:
        return <SearchView setPalette={this.setPalette} />
      case PALETTE_VIEW:
        return (
          <PaletteView
            palette={this.state.palette}
            expandColor={this.expandColor}
          />
        )
      case DETAIL_VIEW:
        return (
          <DetailView
            color={this.state.expandedColor}
            locations={this.state.palette[this.state.expandedColor]}
            clearExpanded={this.clearExpanded}
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

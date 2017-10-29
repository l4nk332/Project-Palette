import React from 'react'
import { connect } from 'react-redux'

import { setPaletteView } from '../redux/actionCreators'
import {
  SEARCH_VIEW,
  PALETTE_VIEW
} from '../redux/actionTypes'

import SearchView from './SearchView'
import PaletteView from './PaletteView'

import Container from '../components/Container/Container.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      palette: {},
    }

    this.setPalette = this.setPalette.bind(this)
    this.renderCurrentView = this.renderCurrentView.bind(this)
  }

  setPalette(palette) {
    this.setState({palette}, () => {
      this.props.setPaletteView()
    })
  }

  renderCurrentView() {
    switch (this.props.currentView) {
      case SEARCH_VIEW:
        return (
          <SearchView setPalette={this.setPalette} />
        )
      case PALETTE_VIEW:
        return (
          <PaletteView
            palette={this.state.palette}
            projectURL={this.state.projectURL}
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

const mapStateToProps = state => ({
  currentView: state._view.currentView
})

const mapDispatchToProps = {
  setPaletteView
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

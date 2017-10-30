import React from 'react'
import { connect } from 'react-redux'

import { setPaletteView } from '../redux/actionCreators'
import {
  SEARCH_VIEW,
  PALETTE_VIEW,
} from '../redux/actionTypes'

import SearchView from './SearchView'
import PaletteView from './PaletteView'

import Container from '../components/Container/Container.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.renderCurrentView = this.renderCurrentView.bind(this)
  }

  renderCurrentView() {
    switch (this.props.currentView) {
      case SEARCH_VIEW:
        return (
          <SearchView />
        )
      case PALETTE_VIEW:
        return (
          <PaletteView />
        )
      default:
        console.error('Unhandled view has been set.')
      }
  }

  render() {
    return (
      <Container isLoading={this.props.isLoading}>
        {this.renderCurrentView()}
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  currentView: state.view.currentView,
  isLoading: state.isLoading,
})

export default connect(mapStateToProps)(App)

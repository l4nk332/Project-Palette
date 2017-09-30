import React from 'react'

import { DETAIL_VIEW } from '../utils/constants'

import DetailView from './DetailView'

import Grid from '../components/Grid/Grid.jsx'
import ColorSwatch from '../components/ColorSwatch/ColorSwatch.jsx'


export default class PaletteView extends React.Component {
  constructor({palette}) {
    super()
    this.state = {
      expandedColor: null
    }

    this.palette = palette
    this.expandColor = this.expandColor.bind(this)
    this.clearExpanded = this.clearExpanded.bind(this)
    this.renderSwatches = this.renderSwatches.bind(this)
    this.renderDetailView = this.renderDetailView.bind(this)
  }

  clearExpanded() {
    this.setState({expandedColor: null})
  }

  expandColor(color) {
    this.setState({expandedColor: color})
  }

  renderSwatches() {
    return (
      Object.keys(this.palette)
            .map((color, idx) => (
              <ColorSwatch
                key={idx}
                color={color}
                expandColor={this.expandColor}
              />
            ))
    )
  }

  renderDetailView() {
    return (
      <DetailView
        color={this.state.expandedColor}
        locations={this.palette[this.state.expandedColor]}
        clearExpanded={this.clearExpanded}
      />
    )
  }

  render() {
    return (
      <div>
        <div style={{visibility: this.state.expandedColor ? 'hidden' : 'visible'}}>
          <Grid>
            {this.renderSwatches()}
          </Grid>
        </div>
        {this.state.expandedColor && this.renderDetailView()}
      </div>
    )
  }
}

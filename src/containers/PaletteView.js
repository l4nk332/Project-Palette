import React from 'react'

import Grid from '../components/Grid/Grid.jsx'
import ColorSwatch from '../components/ColorSwatch/ColorSwatch.jsx'


export default class PaletteView extends React.Component {
  constructor({palette, expandColor}) {
    super()
    this.palette = palette
    this.expandColor = expandColor
    this.renderSwatches = this.renderSwatches.bind(this)
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

  render() {
    return (
      <div>
        <Grid>
          {this.renderSwatches()}
        </Grid>
      </div>
    )
  }
}

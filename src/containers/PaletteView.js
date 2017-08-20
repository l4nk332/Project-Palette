import React from 'react'

import Container from '../components/Container/Container.jsx'
import Grid from '../components/Grid/Grid.jsx'
import ColorSwatch from '../components/ColorSwatch/ColorSwatch.jsx'


export default class PaletteView extends React.Component {
  constructor({palette}) {
    super()
    this.palette = palette
    this.renderSwatches = this.renderSwatches.bind(this)
  }

  renderSwatches() {
    Object.keys(this.palette).map(color => <ColorSwatch color={color} />)
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

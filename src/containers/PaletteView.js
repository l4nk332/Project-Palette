import React from 'react'
import { connect } from 'react-redux'

import DetailView from './DetailView'

import Grid from '../components/Grid/Grid.jsx'
import ColorSwatch from '../components/ColorSwatch/ColorSwatch.jsx'


class PaletteView extends React.Component {
  constructor(props) {
    super(props)
    this.palette = this.props.palette
    this.renderSwatches = this.renderSwatches.bind(this)
    this.renderDetailView = this.renderDetailView.bind(this)
  }

  renderSwatches() {
    return (
      Object.keys(this.palette)
            .map((color, idx) => (
              <ColorSwatch
                key={idx}
                color={color}
              />
            ))
    )
  }

  renderDetailView() {
    return (
      <DetailView locations={this.palette[this.props.colorDetail]} />
    )
  }

  render() {
    return (
      <div>
        <div style={{ visibility: this.props.colorDetail ? 'hidden' : 'visible' }}>
          <Grid>
            {this.renderSwatches()}
          </Grid>
        </div>
        {this.props.colorDetail && this.renderDetailView()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  colorDetail: state.colorDetail,
})


export default connect(
  mapStateToProps,
)(PaletteView)

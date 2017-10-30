import React from 'react'
import { connect } from 'react-redux'

import DetailView from './DetailView'

import Grid from '../components/Grid/Grid.jsx'
import ColorSwatch from '../components/ColorSwatch/ColorSwatch.jsx'


class PaletteView extends React.Component {
  constructor(props) {
    super(props)
    this.renderSwatches = this.renderSwatches.bind(this)
    this.renderDetailView = this.renderDetailView.bind(this)
  }

  renderSwatches() {
    return (
      Object.keys(this.props.palette)
            .map((color, idx) => (
              <ColorSwatch
                key={idx}
                color={color}
              />
            ))
    )
  }

  renderDetailView() {
    let locations = this.props.palette[this.props.colorDetail]

    return (
      <DetailView locations={locations} />
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
  palette: state.palette,
})


export default connect(
  mapStateToProps,
)(PaletteView)

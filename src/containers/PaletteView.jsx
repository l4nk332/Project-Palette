import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { asyncFetchColorPalette } from '../redux/actionCreators'

import DetailView from './DetailView'

import Grid from '../components/Grid/Grid'
import ColorSwatch from '../components/ColorSwatch/ColorSwatch'


class PaletteView extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const {name, project} = this.props.match.params
    if (name && project) {
      this.props.asyncFetchColorPalette(`${name}/${project}`)
    }
  }

  renderSwatches = () => {
    return (
      Object.keys(this.props.palette)
        .map(color => (
          <ColorSwatch
            key={color}
            color={color}
          />
        ))
    )
  }

  renderDetailView = () => {
    const locations = this.props.palette[this.props.colorDetail]
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

const mapDispatchToProps = {
  asyncFetchColorPalette,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PaletteView))

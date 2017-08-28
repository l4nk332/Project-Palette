import React from 'react'
import TiTimes from 'react-icons/lib/ti/times'
import { getTextColor } from '../utils/color-manipulation'

export default class DetailView extends React.Component {
  constructor({color, locations, clearExpanded}) {
    super()
    this.color = color
    this.locations = locations
    this.clearExpanded = clearExpanded
  }

  render() {
    return (
      <div
        style={{width: '100%', height: '100vh', backgroundColor: this.color}}
      >
        <TiTimes
          onClick={() => {this.clearExpanded()}}
          style={{color: getTextColor(this.color)}}
        />
      </div>
    )
  }
}

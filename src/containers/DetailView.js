import React from 'react'

import Backdrop from '../components/Backdrop/Backdrop.jsx'
import LocationList from '../components/LocationList/LocationList.jsx'
import Heading from '../components/Heading/Heading.jsx'
import CloseIcon from '../components/CloseIcon/CloseIcon.jsx'

export default class DetailView extends React.Component {
  constructor({color, locations, clearExpanded, projectURL}) {
    super()
    this.color = color
    this.locations = locations.locations
    this.clearExpanded = clearExpanded
    this.projectURL = projectURL
  }

  render() {
    return (
      <Backdrop color={this.color}>
        <CloseIcon handleClick={this.clearExpanded} />
        <Heading>{this.color}</Heading>
        <LocationList
          color={this.color}
          locations={this.locations}
          projectURL={this.projectURL}
        />
      </Backdrop>
    )
  }
}

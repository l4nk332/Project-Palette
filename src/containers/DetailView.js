import React from 'react'
import { connect } from 'react-redux'

import { closeColorDetail } from '../redux/actionCreators'

import { toggleStaticBody } from '../utils/misc'

import Backdrop from '../components/Backdrop/Backdrop.jsx'
import LocationList from '../components/LocationList/LocationList.jsx'
import Heading from '../components/Heading/Heading.jsx'
import CloseIcon from '../components/CloseIcon/CloseIcon.jsx'

class DetailView extends React.Component {
  constructor(props) {
    super(props)
    this.closeColorDetail = this.closeColorDetail.bind(this)
  }

  closeColorDetail() {
    toggleStaticBody(false)
    this.props.closeColorDetail()
  }

  render() {
    return (
      <Backdrop color={this.props.colorDetail}>
        <CloseIcon handleClick={this.closeColorDetail} />
        <Heading>{this.props.colorDetail}</Heading>
        <LocationList
          color={this.props.colorDetail}
          locations={this.props.locations.locations}
          projectURL={this.props.projectUrl}
        />
      </Backdrop>
    )
  }
}

const mapStateToProps = state => ({
  colorDetail: state.colorDetail,
  projectUrl: state.projectUrl,
})

const mapDispatchToProps = {
  closeColorDetail,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailView)

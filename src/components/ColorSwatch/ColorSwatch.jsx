import React from 'react'
import { connect } from 'react-redux'
import CopyToClipboard from 'react-copy-to-clipboard'

import { openColorDetail } from '../../redux/actionCreators'

import TiClipboard from 'react-icons/lib/ti/clipboard'
import TiTick from 'react-icons/lib/ti/tick'
import TiArrowMaximise from 'react-icons/lib/ti/arrow-maximise'

import './ColorSwatch.sass'

import { getTextColor } from '../../utils/color-manipulation'
import { toggleStaticBody } from '../../utils/misc'


class ColorSwatch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasCopied: false,
    }

    this.color = this.props.color
    this.openColorDetail = this.openColorDetail.bind(this)
    this.normalizedColor = this.props.color.toLowerCase()
    this.textColor = getTextColor(this.normalizedColor)

    this.copiedToClipboard = this.copiedToClipboard.bind(this)
  }

  openColorDetail(color) {
    toggleStaticBody()
    this.props.openColorDetail(color)
  }

  copiedToClipboard() {
    this.setState({ hasCopied: true }, () => {
      setTimeout(() => {
        this.setState({ hasCopied: false })
      }, 1000)
    })
  }

  render() {
    return (
      <div
        style={{ backgroundColor: this.normalizedColor }}
        className='color-swatch'
      >
        <div className='icon-bar'>
          <CopyToClipboard text={this.normalizedColor}>
            <a title='Copy to Clipboard'>
              { this.state.hasCopied
                ? <TiTick style={{ color: this.textColor }} />
                :
                <TiClipboard
                  className='icon'
                  onClick={this.copiedToClipboard}
                  style={{ color: this.textColor }}
                />
              }
            </a>
          </CopyToClipboard>
          <a title='Expand Color Details'>
            <TiArrowMaximise
              style={{ color: this.textColor }}
              className='icon'
              onClick={() => { this.openColorDetail(this.color) }}
            />
          </a>
        </div>
        <span style={{ color: this.textColor }}>
          { this.state.hasCopied
            ? 'Copied to Clipboard'
            : this.normalizedColor
          }
        </span>
      </div>
    )
  }
}

const mapDispatchToProps = {
  openColorDetail,
}

export default connect(
  null,
  mapDispatchToProps,
)(ColorSwatch)

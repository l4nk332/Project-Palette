import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import TiClipboard from 'react-icons/lib/ti/clipboard'
import TiTick from 'react-icons/lib/ti/tick'
import TiArrowMaximise from 'react-icons/lib/ti/arrow-maximise'
import './ColorSwatch.sass'
import { getTextColor } from '../../utils/color-manipulation'

export default class ColorSwatch extends React.Component {
  constructor({color, expandColor}) {
    super()
    this.state = {
      hasCopied: false
    }

    this.color = color
    this.expandColor = expandColor
    this.normalizedColor = color.toLowerCase()
    this.textColor = getTextColor(this.normalizedColor)

    this.copiedToClipboard = this.copiedToClipboard.bind(this)
  }

  copiedToClipboard() {
    this.setState({hasCopied: true}, () => {
      setTimeout(() => {
        this.setState({hasCopied: false})
      }, 1000)
    })
  }

  render() {
    return (
      <div
        style={{backgroundColor: this.normalizedColor}}
        className='color-swatch'
      >
        <div className='icon-bar'>
          <CopyToClipboard text={this.normalizedColor}>
            <a title='Copy to Clipboard'>
              { this.state.hasCopied
                ? <TiTick style={{color: this.textColor}} />
                : <TiClipboard
                    className='icon'
                    onClick={this.copiedToClipboard}
                    style={{color: this.textColor}}
                  />
              }
            </a>
          </CopyToClipboard>
          <a title='Expand Color Details'>
            <TiArrowMaximise
              style={{color: this.textColor}}
              className='icon'
              onClick={() => { this.expandColor(this.color)}}
            />
          </a>
        </div>
        <span style={{color: this.textColor}}>
          { this.state.hasCopied
            ? "Copied to Clipboard"
            : this.normalizedColor
          }
        </span>
      </div>
    )
  }
}

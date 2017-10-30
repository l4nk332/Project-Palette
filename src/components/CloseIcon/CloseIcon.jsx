import React from 'react'
import TiTimes from 'react-icons/lib/ti/times'

import './CloseIcon.sass'

function CloseIcon({ handleClick }) {
  return (
    <TiTimes
      className="CloseIcon"
      onClick={() => { handleClick() }}
    />
  )
}

export default CloseIcon

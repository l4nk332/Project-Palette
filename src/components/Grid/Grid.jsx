import React from 'react'
import './Grid.sass'

function Grid({children}) {
  return (
    <div className='grid'>
      {children}
    </div>
  )
}

export default Grid

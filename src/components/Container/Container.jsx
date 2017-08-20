import React from 'react'

import Loader from '../Loader/Loader.jsx'

function Container({ isLoading, children }) {
  return (
    <section>
      { isLoading
        ? (<Loader />)
        : children
      }
    </section>
  )
}

export default Container

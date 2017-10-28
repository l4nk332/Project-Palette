import React from 'react'
import { connect } from 'react-redux'

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

const mapStateToProps = state => ({
  isLoading: state._isLoading.isLoading,
})

export default connect(mapStateToProps)(Container)

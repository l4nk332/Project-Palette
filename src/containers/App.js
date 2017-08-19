import React from 'react'
import ReactDOM from 'react-dom'

import SearchView from './SearchView'

export default class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <SearchView />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

import React from 'react'
import ReactDOM from 'react-dom'

import Container from '../components/Container.jsx'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      title: 'Project Palette',
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 5000)
  }

  render() {
    return (
      <Container isLoading={this.state.isLoading}>
        <h1>{this.state.title}</h1>
      </Container>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

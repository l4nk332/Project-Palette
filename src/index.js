import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './redux/store'

import 'normalize.css'
import './base.sass'

import App from './containers/App'

const Main = () => <Provider store={store}><App /></Provider>

ReactDOM.render(<Main />, document.getElementById('app'))

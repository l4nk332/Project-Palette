import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import 'normalize.css';

import store from './redux/store';

import './base.sass';

import AppContainer from './containers/AppContainer';

const Main = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Main />, document.getElementById('app'));

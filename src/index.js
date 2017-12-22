import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import 'normalize.css';

import store from 'redux/store';

import 'styles/base.sass';

import {AppContainer} from 'containers';

const Main = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Main />, document.getElementById('app'));

import {createStore, applyMiddleware, compose} from 'redux';

import reducer from 'redux/reducers';
import middleware from 'redux/middleware';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

export default store;

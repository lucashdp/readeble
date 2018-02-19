import React, { Component } from 'react';
import Loading from './Loading';
import RoutesApp from './RoutesApp';
import { Route } from 'react-router-dom'
import { ConnectedRouter, routerMiddleware, routerReducer } from "react-router-redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createHistory from 'history/createBrowserHistory';
import reducer from '../reducers';
import * as ReadebleAPI from '../utils/ReadebleAPI';
import { getAll } from '../actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const browserHistory = createHistory();
const router = routerMiddleware(browserHistory);

const store = createStore(
  combineReducers({
    ...reducer,
    router: routerReducer
  }),  
  getAll(),
  compose(
    applyMiddleware(thunk.withExtraArgument(ReadebleAPI), router),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

const App = () => {
  return (
    <Provider store={store}>
      <RoutesApp browserHistory={browserHistory} />
    </Provider>
  );
}

export default App;
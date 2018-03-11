import React from 'react';
import RoutesApp from './RoutesApp';
import { routerMiddleware, routerReducer } from "react-router-redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createHistory from 'history/createBrowserHistory';
import reducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const browserHistory = createHistory();
const router = routerMiddleware(browserHistory);

const enhancers = composeEnhancers(
  applyMiddleware(thunk),
  applyMiddleware(router)
);

const store = createStore(
  combineReducers({
    reducer,
    router: routerReducer
  }),  
  enhancers
)

const App = () => {
  return (
    <Provider store={store}>
      <RoutesApp browserHistory={browserHistory} />
    </Provider>
  );
}

export default App;
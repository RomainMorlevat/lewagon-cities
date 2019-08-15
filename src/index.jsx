// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
import citiesReducer from './reducers/cities_reducer';
import activeCityReducer from './reducers/active_city_reducer';

const reducers = combineReducers({
  // changeMe: (state = null, action) => state
  cities: citiesReducer,
  activeCity: activeCityReducer
});

const middlewares = applyMiddleware(logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({}); //import and add reducers
const store = createStore(rootReducer);

ReactDOM.render(
  <App store={store} />, 
  document.getElementById('root')
);

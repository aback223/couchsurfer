import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({ userReducer }); //import and add reducers
const store = createStore(
  rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App store={store} /> 
  </Provider>, 
  document.getElementById('root')
);
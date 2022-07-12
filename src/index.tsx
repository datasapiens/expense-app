import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './App.css';
import { debounce } from "debounce";
import { saveState } from './storage/localState';
import { store } from './store';

store.subscribe(
  debounce(()=> {
    saveState(store.getState());
  })
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);

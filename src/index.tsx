// outsource dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// local dependencies
import './styles/index.scss';
import { store } from './constants';
import reportWebVitals from './reportWebVitals';

import { ExpenseApp } from './pages/expense-app';

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <ExpenseApp />
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

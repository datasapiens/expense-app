import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {Routing} from './Routes';
import { store } from './redux/store';
import { Provider} from 'react-redux';
import { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { HashRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HashRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Routing/>
      </PersistGate>
    </Provider>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

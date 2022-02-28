import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { StoreProvider } from 'easy-peasy'
import store from './store'

import App from './App/index'

ReactDOM.render(
  <StoreProvider store={store}>
    <Router>
      <App />
    </Router>
  </StoreProvider>,
  document.getElementById('root')
)

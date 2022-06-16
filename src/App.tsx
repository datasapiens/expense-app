import React, { useEffect } from 'react'
import './app.scss'
import { useAppDispatch } from './store'
import { initialiseCategoriesAction } from './store/reducers/categories.reducer'
import { initialiseTransactionsAction } from './store/reducers/transactions.reducer'
import { initData, localStorageGet } from './helpers'
import AppBar from './features/AppBar'
import Routes from './Routes'

function App() {
  const dispatch = useAppDispatch()

  useEffect(initData, [])
  useEffect(() => {
    dispatch(initialiseCategoriesAction(localStorageGet('categories')))
    dispatch(initialiseTransactionsAction(localStorageGet('transactions')))
  }, [])

  return (
    <div className='App'>
      <AppBar />
      <Routes />
    </div>
  )
}

export default App

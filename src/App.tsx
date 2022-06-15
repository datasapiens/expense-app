import React, { useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './app.scss'
import { CATEGORIES, TRANSACTIONS } from './data'
import { useAppDispatch } from './store'
import { initialiseCategoriesAction } from './store/reducers/categories.reducer'
import { initialiseTransactionsAction } from './store/reducers/transactions.reducer'
import Home from './features/Home'
import { Container, AppBar, Toolbar } from '@mui/material'
import Graphs from './features/Graphs'

const localStorageSet = <T,>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value))
}

const localStorageGet = (key: string): string | null => {
  const item = localStorage.getItem(key)
  if (item) {
    return JSON.parse(item)
  }
  return null
}

const initData = (): void => {
  if (!localStorageGet('categories')) {
    localStorageSet('categories', CATEGORIES)
  }

  if (!localStorageGet('transactions')) {
    localStorageSet('transactions', TRANSACTIONS)
  }
}

function App() {
  const dispatch = useAppDispatch()

  useEffect(initData, [])
  useEffect(() => {
    dispatch(initialiseCategoriesAction(localStorageGet('categories')))
    dispatch(initialiseTransactionsAction(localStorageGet('transactions')))
  }, [])

  return (
    <div className='App'>
      <Container maxWidth='xl'>
        <AppBar sx={{ display: 'flex', justifyContent: 'space-between' }} position='static'>
          <Toolbar>
            <h1>Expense App</h1>
            <nav className='nav'>
              <ul id='navigation'>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/graphs'>Graphs</Link>
                </li>
              </ul>
            </nav>
          </Toolbar>
        </AppBar>
      </Container>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/graphs' element={<Graphs />} />
      </Routes>
    </div>
  )
}

export default App

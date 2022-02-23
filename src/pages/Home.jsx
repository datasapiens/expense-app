import React, { useState, useEffect } from 'react'

import styles from './Home.module.scss'

import { TransactionTable } from '../components/TransactionTable'
import { CategoriesTable } from '../components/CategoriesTable'

const Home = () => {
  return (
    <div className='Home'>
      <h1>Home</h1>

      <TransactionTable />

      <CategoriesTable />
    </div>
  )
}

export default Home

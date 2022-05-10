import React, { FC } from 'react'

import Balance from '../../components/Balance/index'
import IncomeExpenses from '../../components/IncomeExpenses/index'
import TransactionList from '../../components/TransactionList/index'
import AddCategoryBar from '../../components/AddCategoryBar/index'
import BottomAppBar from '../../components/BottomAppBar/index'


const Home: FC = () => {
  return (
    <>
      <Balance />
      <AddCategoryBar/>
      <BottomAppBar/>
      <IncomeExpenses />
      <TransactionList />
    </>
  )
}

export default Home

import * as React from 'react'
import { useAppSelector } from '../../store'
import { Grid, Paper, Typography } from '@mui/material'
import TransactionsTable, { TRANSACTIONS_HEADERS } from './components/TransactionsTable'
import { categoriesSelector } from '../../store/reducers/categories.reducer'
import { transactionsSelector } from '../../store/reducers/transactions.reducer'

const Transactions = () => {
  const transactions = useAppSelector(transactionsSelector)
  const categories = useAppSelector(categoriesSelector)

  /**
   * Do not render transactions which do not belong to an available category
   */
  const filteredTransactions = transactions.filter((transaction) =>
    categories.some((category) => category.id === transaction.category),
  )
  return (
    <Paper>
      <Grid container p={3} direction='column'>
        <Grid item xs>
          <Typography component='h1' variant='h4' align='left' mb={2}>
            Transactions
          </Typography>
        </Grid>
      </Grid>
      <TransactionsTable rows={filteredTransactions} headers={TRANSACTIONS_HEADERS} />
    </Paper>
  )
}

export default Transactions

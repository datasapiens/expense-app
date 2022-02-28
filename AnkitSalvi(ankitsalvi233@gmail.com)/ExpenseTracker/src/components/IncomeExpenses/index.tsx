import React, { FC } from 'react'

import { useStoreState } from '../../store'

import useStyles from './styles'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'


const IncomeExpenses: FC = () => {
  const classes = useStyles()
  const { totalIncome, totalExpense } = useStoreState(
    (state) => state.transactions
  )

  return (
    <Paper elevation={2} className={classes.container}>
      <div className={classes.valueContainer}>
        <Typography
          variant='h5'
          component='h2'
          className={classes.incomeHeading}
        >
          Income
        </Typography>
        <Typography variant='h6' component='h4'>
          +{totalIncome}
        </Typography>
      </div>
                                                                                                                                                                                                
      <div className={classes.valueContainer}>
        <Typography
          variant='h5'
          component='h2'
          className={classes.expenseHeading}
        >
          Expense
        </Typography>
        <Typography variant='h6' component='h4'>
          {totalExpense}
        </Typography>
      </div>
    </Paper>
  )
}

export default IncomeExpenses

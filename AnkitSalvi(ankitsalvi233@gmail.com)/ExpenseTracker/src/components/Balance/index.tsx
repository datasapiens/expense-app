import React, { FC } from 'react'

import Typography from '@material-ui/core/Typography'
import { useStoreState } from '../../store'


const Balance: FC = () => {
  const totalBalance = useStoreState(state => state.transactions.totalBalance)

  return (
    <>
      <Typography variant='h6'>
        Your Balance
      </Typography>
      <Typography variant='h4'>
        {totalBalance}
      </Typography>
    </>
  )
}

export default Balance

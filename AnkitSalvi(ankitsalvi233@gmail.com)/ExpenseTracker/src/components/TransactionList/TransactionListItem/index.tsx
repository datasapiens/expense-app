import React, { FC } from 'react'
import clsx from 'clsx'

import useStyles from './styles'

import ListItem from '@material-ui/core/ListItem'
import Paper from '@material-ui/core/Paper'

interface TransactionListItemProps {
  id: string,
  description: string,
  amount: number,
}

const TransactionListItem: FC<TransactionListItemProps> = ({
  id,
  description,
  amount,
}) => {
  const classes = useStyles()
  return (
    <ListItem disableGutters dense>
      <Paper
        elevation={2}
        className={clsx(
          classes.container,
          amount > 0 ? classes.greenBorder : classes.redBorder
        )}
      >
        <span>{description}</span>
        <span>{amount}</span>
      </Paper>
    </ListItem>
  )

}

export default TransactionListItem

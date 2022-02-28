import React, { FC } from 'react'
import clsx from 'clsx'

import useStyles from './styles'

import ListItem from '@material-ui/core/ListItem'
import Paper from '@material-ui/core/Paper'
import { useStoreActions } from '../../../store'

interface AddCategoryListItemProps {
  description: string,
}

const AddCategoryListItem: FC<AddCategoryListItemProps> = ({
  description,
}) => {
  const classes = useStyles()


  const deleteCategory = useStoreActions(
    (actions) => actions.transactions.deleteCategory
  )

  function handleDelete() {
    deleteCategory(description)
  }

  return (
    <ListItem disableGutters dense>
      <Paper
        elevation={2}
        className={clsx(
          classes.container,
          classes.greenBorder
        )}
      >
        <span>{description}</span>
        <button
          className='deleteBtn'
          title='Delete transaction'
          onClick={handleDelete}
        >
          x
        </button>
      </Paper>
    </ListItem>
  )

}

export default AddCategoryListItem

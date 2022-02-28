import React, { FC, useState } from 'react'

import useStyles from './styles'

import AddTransactionModal from '../AddTransactionModal/index'

import Toolbar from '@material-ui/core/Toolbar'
import Fab from '@material-ui/core/Fab'
import { Paper } from '@material-ui/core'

const BottomAppBar: FC = () => {
  const classes = useStyles()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <AddTransactionModal
        isOpen={isModalOpen}
        close={() => setIsModalOpen(false)}
      />
       <Paper className={classes.paper}>

          <Toolbar classes={{ root: classes.toolbar }}>

            <div className={classes.text}>Add Transaction(Add positive number for Income and negative for Expense)</div>
            <Fab
                color='primary'
                aria-label='add'
                className={classes.fabButton}
                onClick={handleFABClicked}
            >
                +
            </Fab>
           </Toolbar>

      </Paper>
    </>
  )

  /* Handlers */
  function handleFABClicked(): void {
    setIsModalOpen(true)
  }
}

export default BottomAppBar

import React, { FC, useState } from 'react'

import useStyles from './styles'

import AddCategoryModal from '../AddCategoryModal'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Fab from '@material-ui/core/Fab'
import { Paper } from '@material-ui/core'

const AddCategoryBar: FC = () => {
  const classes = useStyles()
  const [isCateggoryModalOpen, setIsCateggoryModalOpen] = useState(false)

  return (
    <>
      <AddCategoryModal
        isOpen={isCateggoryModalOpen}
        close={() => setIsCateggoryModalOpen(false)}
      />
      <Paper className={classes.paper}>
       
        <Toolbar classes={{ root: classes.toolbar }}>
        <div className={classes.text}>Add Category</div>
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
    setIsCateggoryModalOpen(true)
  }
}

export default AddCategoryBar

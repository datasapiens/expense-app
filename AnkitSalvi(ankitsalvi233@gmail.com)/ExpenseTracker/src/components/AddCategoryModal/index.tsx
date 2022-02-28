import React, { FC } from 'react'

import { useStoreActions, useStoreState } from '../../store'

import useStyles from './styles'

import { useForm } from 'react-hook-form'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import AddCategoryListItem from './AddCategoryListItem/index'

interface Inputs {
  description: string,
  amount: number,
}

interface Props {
  isOpen: boolean,
  close: () => void,
}

const AddCategoryModal: FC<Props> = ({ isOpen, close }) => {
  const classes = useStyles()
  const { register, handleSubmit, errors, reset } = useForm<Inputs>()
  const addCategory = useStoreActions((actions) => actions.transactions.addCategory)

  const category = useStoreState((state) => state.transactions.category)

  const onSubmit = (data: Inputs) => {
    const { description } = data

    addCategory(description)
    /* Clear form */
    reset({})
  }

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={close}
        fullWidth={true}
        maxWidth='sm'
      >
        <DialogTitle>Add Category</DialogTitle>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <DialogContent classes={{ root: classes.dialogContent }}>
            {/* Description Field */}
            <TextField
              fullWidth={true}
              InputLabelProps={{
                shrink: true,
              }}
              label='Category Name'
              placeholder='Enter Category Name...'
              variant='outlined'
              margin='normal'
              inputProps={{
                name: 'description',
                ref: register({ required: true }),
              }}
              error={errors.description ? true : false}
              helperText='This field is required'
            />

          </DialogContent>

          <DialogActions classes={{ root: classes.dialogActions }} disableSpacing>
            <Button onClick={close} color='inherit' classes={{ root: classes.cancelButton }}>
              Cancel
            </Button>
            <Button type='submit' color='secondary' classes={{
                root: classes.confirmButton,
              }}
            >
              Add Category
            </Button>
          </DialogActions>

        </form>
        <DialogContent>

            {category.map((item, i)=>{
                return <AddCategoryListItem key={i} description={item}/>
            })

            }
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AddCategoryModal

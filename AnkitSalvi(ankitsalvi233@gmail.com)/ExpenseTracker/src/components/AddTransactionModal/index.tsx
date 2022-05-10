import React, { FC } from 'react'

import { useStoreActions, useStoreState } from '../../store'

import useStyles from './styles'
import { NewTransaction } from '../../models'
import { useForm } from 'react-hook-form'
import { DateTime } from 'luxon'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import MenuItem from '@material-ui/core/MenuItem'
interface Inputs {
  description: string,
  amount: number,
}

interface Props {
  isOpen: boolean,
  close: () => void,
}

const AddTransactionModal: FC<Props> = ({ isOpen, close }) => {
  const classes = useStyles()
  const { register, handleSubmit, errors, reset } = useForm<Inputs>()
  const addTransaction = useStoreActions((actions) => actions.transactions.addTransaction)
  const category = useStoreState((state) => state.transactions.category)

  const onSubmit = (data: Inputs) => {
    const { amount, description } = data
    const timestamp = DateTime.local().toMillis()

    const newTransaction: NewTransaction = {
      description,
      amount: +amount,
      date: timestamp,
    }

    if(description)
    {
        addTransaction(newTransaction)
        /* Clear form */
        reset({})
        /* Close Modal */
        close()
    }
  }

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={close}
        fullWidth={true}
        maxWidth='sm'
      >
        <DialogTitle>Add Transaction</DialogTitle>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <DialogContent classes={{ root: classes.dialogContent }}>

            <TextField
              select
              fullWidth={true}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={e => register({ name: 'description', value: e.target.value })}
              label='Description'
              placeholder='Enter description...'
              variant='outlined'
              margin='normal' 
              error={errors.amount ? true : false}
              helperText={errors.amount ? 'Field is required' : 'If the dropdown is empty add categories from category section'}
            >

                {category.map((item, id)=>{
                    return <MenuItem key={id} value={item}>{item}</MenuItem>
                })

                }
            </TextField>


            <TextField
              fullWidth={true}
              InputLabelProps={{
                shrink: true,
              }}
              label='Amount'
              placeholder='Enter amount...'
              variant='outlined'
              type='number'
              margin='normal'
              inputProps={{
                name: 'amount',
                ref: register({ required: true }),
              }}
              error={errors.amount ? true : false}
              helperText={errors.amount ? 'Field is required' : 'Negative number for expense'}
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
              Add Transaction
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  )
}

export default AddTransactionModal

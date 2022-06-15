import { Button, Grid, MenuItem, Paper, Stack, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import * as React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store'
import { addTransactionAction } from '../../../../store/reducers/transactions.reducer'
import validationSchema from './validation'
import { categoriesSelector } from '../../../../store/reducers/categories.reducer'

/**
 * Renders the transactions form
 */
const TransactionForm = () => {
  const dispatch = useAppDispatch()
  const categories = useAppSelector(categoriesSelector)
  const initialValues = { id: '', label: '', category: '', amount: '', date: new Date() }

  return (
    <Paper>
      <Grid container p={3} direction='column'>
        <Grid item xs>
          <Typography component='h1' variant='h4' align='left' mb={2}>
            Add transaction
          </Typography>
        </Grid>
        <Grid item xs>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, { resetForm }) => {
              dispatch(addTransactionAction(values))
              resetForm()
            }}
            validationSchema={validationSchema}
          >
            {({ values, errors, touched }) => (
              <Form>
                <Stack spacing={1}>
                  <Field
                    size='small'
                    fullWidth
                    as={TextField}
                    label='Transaction id'
                    id='id'
                    name='id'
                    placeholder='Enter a transaction id'
                    helperText={
                      !!(errors.id && touched.id) && (
                        <Typography color='red'>{errors.id}</Typography>
                      )
                    }
                  />
                  <Field
                    size='small'
                    fullWidth
                    as={TextField}
                    label='Transaction label'
                    id='label'
                    name='label'
                    placeholder='Enter a transaction label'
                    helperText={
                      !!(errors.label && touched.label) && (
                        <Typography color='red'>{errors.label}</Typography>
                      )
                    }
                  />
                  <Field
                    size='small'
                    fullWidth
                    as={TextField}
                    label='Transaction amount'
                    id='amount'
                    name='amount'
                    placeholder='Enter a transaction amount'
                    helperText={
                      !!(errors.amount && touched.amount) && (
                        <Typography color='red'>{errors.amount}</Typography>
                      )
                    }
                  />
                  <Field
                    size='small'
                    select
                    fullWidth
                    inputProps={{
                      id: 'category',
                    }}
                    as={TextField}
                    label='Transaction category'
                    id='category'
                    name='category'
                    placeholder='Enter a transaction category'
                    helperText={
                      !!(errors.category && touched.category) && (
                        <Typography color='red'>{errors.category}</Typography>
                      )
                    }
                    value={values.category ?? ''}
                  >
                    {categories.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.label}
                      </MenuItem>
                    ))}
                  </Field>
                </Stack>
                <Stack direction='row' spacing={2} mt={2}>
                  <Button type='submit' variant='contained'>
                    Add
                  </Button>
                  <Button type='reset'>Cancel</Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TransactionForm

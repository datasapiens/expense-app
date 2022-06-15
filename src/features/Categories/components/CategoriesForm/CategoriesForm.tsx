import { Button, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import { Form, Formik, Field } from 'formik'
import * as React from 'react'
import { useAppDispatch } from '../../../../store'
import { addCategoryAction } from '../../../../store/reducers/categories.reducer'
import validationSchema from './validation'

/**
 * Renders the categories form
 */
const CategoriesForm = () => {
  const dispatch = useAppDispatch()
  const initialValues = { id: '', label: '' }

  return (
    <Paper elevation={2}>
      <Grid container p={3} direction='column'>
        <Grid item xs>
          <Typography component='h1' variant='h4' align='left' mb={2}>
            Add Category
          </Typography>
        </Grid>
        <Grid item xs>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, { resetForm }) => {
              dispatch(addCategoryAction(values))
              resetForm()
            }}
            validationSchema={validationSchema}
          >
            {({ errors, touched }) => (
              <Form>
                <Stack spacing={1}>
                  <Field
                    size='small'
                    fullWidth
                    as={TextField}
                    label='Category id'
                    id='id'
                    name='id'
                    placeholder='Enter a category id'
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
                    label='Category label'
                    id='label'
                    name='label'
                    placeholder='Enter a category label'
                    helperText={
                      !!(errors.label && touched.label) && (
                        <Typography color='red'>{errors.label}</Typography>
                      )
                    }
                  />
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

export default CategoriesForm

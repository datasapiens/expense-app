import * as Yup from 'yup'

const validationSchema = Yup.object({
  id: Yup.string().required('Please enter an id'),
  label: Yup.string().required('Please enter a label'),
})

export default validationSchema

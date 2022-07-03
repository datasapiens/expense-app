import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { InferType, object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { v4 as uuid } from 'uuid';
import { addCategory } from '../../../../store';
import styles from './CategoryForm.module.scss';
import FormControl from '../../../../components/FormControl/FormControl';
import FormControlLabel from '../../../../components/FormControlLabel/FormControlLabel';
import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';

export const categoryFormSchema = object({
  label: string().required(),
  color: string().required()
});

type CategoryFormType = InferType<typeof categoryFormSchema>;

const CategoryForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<CategoryFormType>({
    defaultValues: {
      label: '',
      color: '#000000'
    },
    resolver: yupResolver(categoryFormSchema)
  });

  // dispatch addCategory and clear form
  const handleSearchSubmit = handleSubmit(async payload => {
    dispatch(addCategory({ ...payload, id: uuid() }));
    reset();
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Add new Category</div>
      <form className={styles.form} onSubmit={handleSearchSubmit}>
        <FormControl hasError={!!errors.label}>
          <FormControlLabel htmlFor="label">Label</FormControlLabel>
          <Input id="label" type="text" {...register('label')} />
        </FormControl>
        <FormControl hasError={!!errors.color}>
          <FormControlLabel htmlFor="color">Color</FormControlLabel>
          <Input id="color" type="color" {...register('color')} />
        </FormControl>
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

export default CategoryForm;

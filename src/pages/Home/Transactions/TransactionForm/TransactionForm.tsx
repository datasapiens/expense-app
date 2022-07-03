import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { InferType, object, string, number } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { v4 as uuid } from 'uuid';
import {
  addTransaction,
  selectAllCategories,
  selectDefaultCategoryId
} from '../../../../store';
import styles from './TransactionForm.module.scss';
import FormControl from '../../../../components/FormControl/FormControl';
import FormControlLabel from '../../../../components/FormControlLabel/FormControlLabel';
import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import Select from '../../../../components/Select/Select';

export const TransactionFormSchema = object({
  label: string().required(),
  date: string().required(),
  amount: number().required(),
  categoryId: string().required()
});

type TransactionFormType = InferType<typeof TransactionFormSchema>;

const TransactionForm = () => {
  const categories = useSelector(selectAllCategories);
  const defaultCategoryId = useSelector(selectDefaultCategoryId);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<TransactionFormType>({
    defaultValues: {
      categoryId: defaultCategoryId
    },
    resolver: yupResolver(TransactionFormSchema)
  });

  const handleSearchSubmit = handleSubmit(async payload => {
    dispatch(addTransaction({ ...payload, id: uuid() }));
    reset();
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Add new Transaction</div>
      <form className={styles.form} onSubmit={handleSearchSubmit}>
        <FormControl hasError={!!errors.label}>
          <FormControlLabel htmlFor="label">Label</FormControlLabel>
          <Input id="label" type="text" {...register('label')} />
        </FormControl>
        <FormControl hasError={!!errors.date}>
          <FormControlLabel htmlFor="date">Date</FormControlLabel>
          <Input
            id="date"
            type="date"
            data-testid="dateField"
            {...register('date')}
          />
        </FormControl>
        <FormControl hasError={!!errors.amount}>
          <FormControlLabel htmlFor="amount">Amount</FormControlLabel>
          <Input id="amount" type="number" {...register('amount')} />
        </FormControl>
        <FormControl hasError={!!errors.categoryId}>
          <FormControlLabel htmlFor="categoryId">Category</FormControlLabel>
          <Select id="categoryId" {...register('categoryId')}>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <Button type="submit">Save</Button>
        </FormControl>
      </form>
    </div>
  );
};

export default TransactionForm;

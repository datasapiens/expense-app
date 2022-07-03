import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addTransactions, selectAllCategories } from '../../../store';
import Transaction from '../../../types/transaction';
import Card from '../../../components/Card/Card';
import Button from '../../../components/Button/Button';

const generateRandomNumber = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
};

const generateRandomDate = (start: Date, end: Date) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

const generateRandomName = (length: number) => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const AddSampleTransactions = (): JSX.Element => {
  const dispatch = useDispatch();

  const categories = useSelector(selectAllCategories);

  const handleclick = (event: MouseEvent) => {
    event.preventDefault();
    const transactions: Transaction[] = Array(100)
      .fill(null)
      .map(() => ({
        id: uuid(),
        label: generateRandomName(generateRandomNumber(4, 32)),
        date: generateRandomDate(
          new Date('2021-01-01'),
          new Date('2021-12-31')
        ).toISOString(),
        amount: generateRandomNumber(-10000, 10000),
        categoryId: categories[Math.floor(Math.random() * categories.length)].id
      }));

    dispatch(addTransactions(transactions));
  };

  return (
    <Card header="Add sample Transactions">
      Click the button to load 100 random trasactions{' '}
      <Button onClick={handleclick} variant="secondary">
        Load
      </Button>
    </Card>
  );
};

export default AddSampleTransactions;

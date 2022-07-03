import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faker } from '@faker-js/faker';
import { v4 as uuid } from 'uuid';
import { addTransactions, selectAllCategories } from '../../../store';
import Transaction from '../../../types/transaction';
import Card from '../../../components/Card/Card';
import Button from '../../../components/Button/Button';

const AddSampleTransactions = (): JSX.Element => {
  const dispatch = useDispatch();

  const categories = useSelector(selectAllCategories);

  const handleclick = (event: MouseEvent) => {
    event.preventDefault();
    const transactions: Transaction[] = Array(100)
      .fill(null)
      .map(() => ({
        id: uuid(),
        label: faker.company.companyName(),
        date: faker.date.between('2021-01-01', '2021-12-31').toISOString(),
        amount: faker.datatype.number({
          min: -10000,
          max: 10000
        }),
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

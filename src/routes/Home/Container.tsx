import React from 'react';
import HomePage from './page/Home';

import {
  addNewCategory,
  removeCategory,
} from '../../store/reducers/categories';
import { selectCategories } from '../../store/selectors/categories';
import { addNewTransaction } from '../../store/reducers/transactions';
import { selectTransactions } from '../../store/selectors/transactions';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import Category from '../../types/category';
import Transaction from '../../types/transaction';

const Container = () => {
  const dispatch = useAppDispatch();

  return (
    <HomePage
      categories={useAppSelector(selectCategories)}
      addNewCategory={(category: Category) =>
        dispatch(addNewCategory(category))
      }
      removeCategory={(category: Category) =>
        dispatch(removeCategory(category))
      }
      addNewTransaction={(transaction: Transaction) => dispatch(addNewTransaction(transaction))}
      transactions={useAppSelector(selectTransactions)}
    />
  );
};

Container.displayName = 'routes/Home/Page/Container';

export default Container;

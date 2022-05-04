import React, { useEffect } from 'react';
import Header from './Header';
import { IBudget } from '../types/budget';
import { ITransaction } from '../types/transaction';
import useActions from '../hooks/useTypedDispatch';
import { getLocalStorageValue, setLocalStorageValue } from '../utils/helpers';
import './index.scss';

// fake data for initial run to test and see most functionality
import { fakeTransactions, fakeBudgets } from '../fakeDataForFirstRun';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { initializeBudget, initializeTransactions } = useActions();

  useEffect(() => {
    const storedBudgets: IBudget[] = getLocalStorageValue('budgets');
    const storedTransactions: ITransaction[] =
      getLocalStorageValue('transactions');

    if (!storedBudgets && !storedTransactions) {
      setLocalStorageValue<IBudget[]>('budgets', fakeBudgets);
      setLocalStorageValue<ITransaction[]>('transactions', fakeTransactions);
    }

    initializeBudget(storedBudgets || fakeBudgets);
    initializeTransactions(storedTransactions || fakeTransactions);
  }, []);

  return (
    <div className="global-container">
      <Header />
      {children}
    </div>
  );
};

export default Layout;

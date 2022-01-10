import { getLocalStorage } from '../../../../app/utils/localStorage';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const TRANSACTIONS_KEY = 'transactions';

export const fetchTransactions = createAsyncThunk('transactions/fetchAll', async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const response = getLocalStorage(TRANSACTIONS_KEY);
  return JSON.parse(response || '');
});

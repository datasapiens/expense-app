import { AppDispatch } from '../../../../app/store';
import { transactionsSlice } from '../transactionSlice';
import { getLocalStorage } from '../../../../app/utils/localStorage';

export const TRANSACTIONS_KEY = 'transactions';

export const fetchTransactions = async (dispatch: AppDispatch) => {
  try {
    dispatch(transactionsSlice.actions.transactionsFetching());
    await new Promise(resolve => setTimeout(resolve, 1000));
    const response = getLocalStorage(TRANSACTIONS_KEY);
    const parsed = JSON.parse(response || '');

    dispatch(transactionsSlice.actions.transactionsFetchingSuccess(parsed || []));
  } catch (error) {
    dispatch(transactionsSlice.actions.transactionsFetchingError(error.message));
  }
};

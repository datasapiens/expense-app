import { AppDispatch } from '../../../app/store';
import { transactionsSlice } from '../transactionSlice';

export const TRANSACTIONS_KEY = 'transactions';

export const fetchTransactions = async (dispatch: AppDispatch) => {
  try {
    dispatch(transactionsSlice.actions.transactionsFetching);
    const response = await window.localStorage.getItem(TRANSACTIONS_KEY);
    const parsed = await JSON.parse(response || '');
    dispatch(transactionsSlice.actions.transactionsFetchingSuccess(parsed));
  } catch (error) {
    dispatch(transactionsSlice.actions.transactionsFetchingError(error.message));
  }
};

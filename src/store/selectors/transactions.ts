import { RootState } from '../../app/store';

export const selectTransactions = (state: RootState) => state.transactions.transactions;
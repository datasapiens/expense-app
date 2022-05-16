import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Transaction from '../../types/transaction';


export interface TransactionState {
    transactions: Transaction[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: TransactionState = {
    transactions: [],
    status: 'idle',
};

export const transactions = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        initializeTransactionsStore: (state, action: PayloadAction<TransactionState>) => {
            state.transactions = action.payload.transactions
            state.status = action.payload.status
        },
        addNewTransaction: (state, action: PayloadAction<Transaction>) => {
            state.transactions = state.transactions.concat(action.payload);
          },
          updateTransactions: (state, action: PayloadAction<Transaction[]>) => {
              state.transactions = action.payload;
          }
    },
});

export const { initializeTransactionsStore, addNewTransaction, updateTransactions } = transactions.actions;

export default transactions.reducer;

import transactionsReducer, { addTransaction, TransactionState } from './transactionSlice';
import { TransactionModel } from '../../../app/models/transaction.model';
import { fetchTransactions } from './API/transactions.service';
import { configureStore } from '@reduxjs/toolkit';
import spyOn = jest.spyOn;

describe('transactions reducer', () => {
  const initialState: TransactionState = {
    transactionsList: [
      {
        label: 'Some name',
        amount: 333,
        categoryId: 3,
      },
    ],
    loading: false,
  };

  it('should handle initial state', () => {
    expect(transactionsReducer(undefined, { type: 'unknown' })).toEqual({
      transactionsList: [],
      loading: false,
    });
  });

  it('should handle add new transaction', () => {
    const transaction: TransactionModel = {
      label: 'Name',
      amount: 100,
      categoryId: 2,
    };
    const actual = transactionsReducer(initialState, addTransaction(transaction));

    expect(actual.transactionsList[actual.transactionsList.length - 1]).toMatchObject({
      id: expect.any(Number),
      date: expect.any(String),
      label: 'Name',
      amount: 100,
      categoryId: 2,
    });
  });

  it('should handle loading state on fetch transactions', () => {
    const actual = transactionsReducer(initialState, fetchTransactions.pending);
    expect(actual.loading).toEqual(true);
  });

  it('should handle success state on fetch transactions', async () => {
    const localStorageData = [{ label: 'Name', amount: 222, categoryId: 2 }];
    spyOn(Object.getPrototypeOf(window.localStorage), 'getItem').mockImplementation(() => JSON.stringify(localStorageData));

    const store = configureStore({
      reducer: function (state = [], action) {
        switch (action.type) {
          case 'transactions/fetchAll/fulfilled':
            return action.payload;
          default:
            return state;
        }
      },
    });
    await store.dispatch(fetchTransactions());

    expect(store.getState()).toEqual(localStorageData);
  });

  it('should handle error state on fetch transactions', () => {
    const actual = transactionsReducer(initialState, fetchTransactions.rejected);
    expect(actual.loading).toEqual(false);
  });
});

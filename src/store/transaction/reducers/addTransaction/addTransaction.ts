import { PayloadAction, Draft } from '@reduxjs/toolkit';
import type { TransactionStoreShape } from 'store/transaction/transactionStore';
import { Transaction } from 'types/Transaction';

export const addTransaction = (
  state: Draft<TransactionStoreShape>,
  action: PayloadAction<Transaction>,
) => {
  const { payload: transaction } = action;

  state.transactions.byId[transaction.id] = transaction;
  state.transactions.allIds.push(transaction.id);
};

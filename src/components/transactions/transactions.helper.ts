import { delay, Observable, of } from "rxjs";
import { Transaction } from "../../redux/initial-state.model";
import { get, save } from "../../utils/storage.utils";

export const TRANSACTIONS_KEY = 'transactions';


export const getTransactionsFromStorage = (): Observable<Transaction[]> => {
  const transactions: Transaction[] | null = get({key: TRANSACTIONS_KEY});
  return of(transactions ? transactions.map((transaction) => ({ ...transaction, date: new Date(transaction.date)})) : []).pipe(delay(1000));
}

export const createTransactionRecord = (transaction: Transaction): Observable<Transaction> => {
  const transactions: Transaction[] = get({key: TRANSACTIONS_KEY});
  const transactionDate: Date = new Date(transaction.date);
  const newTransaction: Transaction = { ...transaction, transaction_id: `${transactions ? transactions.length + 1 : '1'}`, date: transactionDate};
  const newTransactions =  transactions ? [ ...transactions, newTransaction ] : [ newTransaction ];
  const success = save({ key: TRANSACTIONS_KEY, value: newTransactions});

  if(success) {
    return of(newTransaction).pipe(delay(1000));
  }

  throw(Error('Transaction not created'));
}

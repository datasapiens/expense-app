import { ofType } from "redux-observable";
import { catchError, map, mergeMap, of } from "rxjs";
import { Transaction } from "../../redux/initial-state.model";
import { CreateTransactionAction, createTransactionFailure, createTransactionSuccess, CREATE_TRANSACTION, GetTransactionsAction, getTransactionsFailure, getTransactionsSuccess, GET_TRANSACTIONS } from "./transactions.actions";
import { createTransactionRecord, getTransactionsFromStorage } from "./transactions.helper";

const getTransactionsEpic = (action$: any) => action$.pipe(
  ofType(GET_TRANSACTIONS),
  mergeMap((action: GetTransactionsAction) => getTransactionsFromStorage().pipe(
    map((response: Transaction[]) => getTransactionsSuccess(response)),
    catchError((error: any) => of(getTransactionsFailure(error)))
  )
))

const createTransactionEpic = (action$: any) => action$.pipe(
  ofType(CREATE_TRANSACTION),
  mergeMap((action: CreateTransactionAction) => createTransactionRecord(action.transaction).pipe(
    map((response: Transaction) => createTransactionSuccess(response)),
    catchError((error: any) => of(createTransactionFailure(error)))
  )
))

const transactionEpics = [
  getTransactionsEpic,
  createTransactionEpic,
];

export default transactionEpics;
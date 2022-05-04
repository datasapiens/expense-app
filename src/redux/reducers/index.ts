import { combineReducers } from 'redux';
import budgetReducer from './budgetReducer';
import transactionReducer from './transactionReducer';

const rootReducer = combineReducers({
  budgets: budgetReducer,
  transactions: transactionReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

import { configureStore } from '@reduxjs/toolkit';
import persister from './middlewares/persister';
import transactionsReducer from './transactions/transactions.reducer';
import { APP_STATE_KEY } from '../constants';
import { CATEGORIES, DEFAULT_CATEGORY } from '../data';

const categories = CATEGORIES.reduce(
  (acc, item) => {
    return {
      ...acc,
      ids: [...acc.ids, item.id],
      entities: {
        ...acc.entities,
        [item.id]: item
      }
    };
  },
  {
    defaultCategoryId: DEFAULT_CATEGORY.id,
    ids: [DEFAULT_CATEGORY.id] as string[],
    entities: { [DEFAULT_CATEGORY.id]: DEFAULT_CATEGORY }
  }
);

const initialState = {
  transactions: {
    ids: [],
    entities: {},
    categories
  }
};

const loadState = () => {
  const serializedState = localStorage.getItem(APP_STATE_KEY);
  return serializedState ? JSON.parse(serializedState) : initialState;
};

const store = configureStore({
  reducer: {
    transactions: transactionsReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([persister]),
  preloadedState: loadState()
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

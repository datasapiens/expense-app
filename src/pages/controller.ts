// outsource dependencies
import _ from 'lodash';
import { Action } from 'redux';
import { reset } from 'redux-form';
import { takeEvery, put, call, select, delay } from 'redux-saga/effects';
import { Controller, ActionCreators, ActionCreator, create } from 'redux-saga-controller';


// local dependencies
import { CATEGORIES, silence } from '../constants';
import { ApiArchivedTransactionsStorage, ApiCategoriesStorage, ApiTransactionsStorage } from '../services/storage';

// configure
export const EXPENSES_FORM_NAME = {
  CREATE_CATEGORY: 'create-category-form',
  CREATE_TRANSACTION: 'create-transaction-form'
}

// NOTE IMPORTANT!
// You should add interface only of you will use select effect from redux-saga
// In all cases except select effect you don't need it
// It because redux-saga effect select return 'any' in all cases

export interface ICategory {
  id: number;
  label: string;
}

export interface ITransaction {
  id: number;
  label: string;
  date: number;
  amount: number;
  category: number;
}

export interface IArchiveTransaction extends Omit<ITransaction, 'category'>{
  category: ICategory;
}

// NOTE action shortcut
interface ActionController<Payload> extends Action {
  payload: Payload;
}

interface IExpenseInitialState {
  initialized: boolean;
  disabled: boolean;
  categories: ICategory[],
  transactions: ITransaction[],
  archivedTransactions: IArchiveTransaction[]
}

// You should add interface for actions its only one way to define payload annotation
interface IExpenseControllerActions extends ActionCreators<IExpenseInitialState> {
  initialize: ActionCreator<IInitializePayload>;
  addCategory: ActionCreator<IAddCategoryPayload>;
  getCategories: ActionCreator<IGetCategoriesPayload>;
  removeCategory: ActionCreator<IRemoveCategoryPayload>;
  addTransaction: ActionCreator<IAddTransactionsPayload>;
  getTransactions: ActionCreator<IGetTransactionsPayload>;
  // getCategory: ActionCreator<{}>;
}

// NOTE action payloads
interface IInitializePayload { some: string }
interface IGetCategoriesPayload {}
interface IAddCategoryPayload extends ICategory {}
interface IRemoveCategoryPayload { id: string | number }
interface IGetTransactionsPayload {}
interface IAddTransactionsPayload extends ITransaction { }
// type GetSelfPayload = { id: string | number };

export const controller: Controller<IExpenseControllerActions, IExpenseInitialState> = create({
  prefix: 'expense-app',
  actions: [
    'initialize',
    'addCategory',
    'getCategories',
    'removeCategory',
    'addTransaction',
    'getTransactions'
  ],
  initial: {
    disabled: true,
    categories: [],
    transactions: [],
    initialized: false,
    archivedTransactions: []
  },
  subscriber: function* () {
    yield takeEvery(controller.action.initialize.TYPE, silence, initializeSaga);
    yield takeEvery(controller.action.addCategory.TYPE, silence, addCategorySaga);
    yield takeEvery(controller.action.getCategories.TYPE, silence, getCategoriesSaga);
    yield takeEvery(controller.action.removeCategory.TYPE, silence, removeCategorySaga);
    yield takeEvery(controller.action.addTransaction.TYPE, silence, addTransactionSaga);
    yield takeEvery(controller.action.getTransactions.TYPE, silence, getTransactionsSaga);
  }
});

// NOTE Example of usage redux sagas
function* initializeSaga({ type, payload }: ActionController<IInitializePayload>) {
  // NOTE bring reducer to initial state before start initialization
  yield put(controller.action.clearCtrl());

  // const { initialized }: IExpenseInitialState = yield select(controller.select);

  // @ts-ignore
  yield call(getCategoriesSaga, {})
  // @ts-ignore
  yield call(getTransactionsSaga, {})

  // NOTE emulate request
  yield delay(1e3);
  // NOTE update any property of entire controller reducer 'IExpenseInitialState'
  yield put(controller.action.updateCtrl({ initialized: true, disabled: false }));
}

function* getCategoriesSaga({ type, payload }: ActionController<IGetCategoriesPayload>) {
  yield put(controller.action.updateCtrl({ disabled: true }));

  // NOTE emulate request
  yield delay(1e3);

  let categories: ICategory[] = [];

  try {
    categories = yield call(ApiCategoriesStorage.get)
    if (_.isNull(categories) || _.isEmpty(categories)) {
      const remapped = CATEGORIES.map((item, index) => ({ ...item, id: index + 1}))

      yield call(ApiCategoriesStorage.set, remapped)
      yield put(controller.action.updateCtrl({ categories: remapped }))
    } else {
      yield put(controller.action.updateCtrl({ categories: [...categories] }))
    }
  } catch(e) {
    console.log(e)
    // error
  }

  // NOTE update any property of entire controller reducer
  yield put(controller.action.updateCtrl({ disabled: false }));
}

function* getTransactionsSaga({ type, payload }: ActionController<IGetTransactionsPayload>) {
  yield put(controller.action.updateCtrl({ disabled: true }));

  // NOTE emulate request
  yield delay(1e3);

  let transactions: ITransaction[];
  let archivedTransactions: IArchiveTransaction[];
  try {
    transactions = yield call(ApiTransactionsStorage.get)
    archivedTransactions = yield call(ApiArchivedTransactionsStorage.get)

    if (_.isNull(transactions) || _.isEmpty(transactions)) {
      let test: ITransaction[] = [
        {
          id: 1,
          label: 'Test +100',
          date: Date.now(),
          amount: 100,
          category: 1,
        },
        {
          id: 2,
          label: 'Test -25',
          date: Date.now(),
          amount: -25,
          category: 3,
        }
      ]
      yield call(ApiTransactionsStorage.set, [...test])
      yield put(controller.action.updateCtrl({
        transactions: [...test],
        archivedTransactions: !_.isNull(archivedTransactions) ? [...archivedTransactions] : []
      }))
    } else {
      yield put(controller.action.updateCtrl({
        transactions: [...transactions],
        archivedTransactions: !_.isNull(archivedTransactions) ? [...archivedTransactions] : []
      }))
    }
  } catch(e) {
    console.log(e)
    // error
  }
  // NOTE update any property of entire controller reducer
  yield put(controller.action.updateCtrl({ disabled: false }));
}

function* addCategorySaga({ type, payload }: ActionController<IAddCategoryPayload>) {
  yield put(controller.action.updateCtrl({ disabled: true }));
  const { categories }: IExpenseInitialState = yield select(controller.select);

  // const remapped = CATEGORIES.map((item, index) => ({ ...item, id: index + 1}))
  const isIdAlreadyExist = _.some(categories, (category: ICategory) => _.isEqual(category.id, payload.id));
  let newCategory = {
    ...payload
  }
  if (isIdAlreadyExist) {
    newCategory = {
      ...newCategory,
      id: payload.id || categories.length + 1
    }
  }

  yield call(ApiCategoriesStorage.set, [...categories, ...[newCategory]])
  yield put(controller.action.updateCtrl({
    disabled: false,
    categories: [...categories, ...[newCategory]]
  }))
  yield put(reset(EXPENSES_FORM_NAME.CREATE_CATEGORY));
}

function* removeCategorySaga({ type, payload }: ActionController<IRemoveCategoryPayload>) {
  yield put(controller.action.updateCtrl({ disabled: true }));

  const { categories, transactions, archivedTransactions }: IExpenseInitialState = yield select(controller.select);

  let deletedCategory: Partial<ICategory> = _.find(categories, { id: payload.id }) as Partial<ICategory>

  const newCategories = _.filter(categories, (cat: ICategory) => !_.isEqual(cat.id, payload.id));
  const newTransactions = _.filter(transactions, (transaction: ITransaction) => !_.isEqual(transaction.category, payload.id));

  const filteredArchiveTransactions: ITransaction[] = _.filter(transactions, (transaction: ITransaction) => _.isEqual(transaction.category, payload.id));
  const deprecatedTransactions: IArchiveTransaction[] = _.map(filteredArchiveTransactions, (transactions) => {
    return {
      ...transactions,
      category: { ...deletedCategory } as ICategory
    }
  })

  yield call(ApiCategoriesStorage.set, [...newCategories])
  yield call(ApiTransactionsStorage.set, [...newTransactions])
  yield call(ApiArchivedTransactionsStorage.set, [...archivedTransactions, ...deprecatedTransactions])

  yield put(controller.action.updateCtrl({
    disabled: false,
    categories: [...newCategories],
    transactions: [...newTransactions],
    archivedTransactions: [...archivedTransactions, ...deprecatedTransactions]
  }))
}

function* addTransactionSaga({ type, payload }: ActionController<IAddTransactionsPayload>) {
  yield put(controller.action.updateCtrl({ disabled: true }));

  const { transactions }: IExpenseInitialState = yield select(controller.select);
  const newTransactions = [
    ...transactions,
    ...[payload]
  ]

  yield call(ApiTransactionsStorage.set, [...newTransactions]);

  yield put(controller.action.updateCtrl({
    transactions: [...newTransactions],
    disabled: false
  }))

  yield put(reset(EXPENSES_FORM_NAME.CREATE_TRANSACTION));
}

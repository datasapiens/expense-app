const CREATE_TRANS = 'CREATE_TRANS';
const CREATE_CAT = 'CREATE_CAT';

const createAction = <T extends string>(type: T) => {
  const actionCreator = <T extends unknown>(payload: T) => ({ type, payload });
  actionCreator.toString = () => type;
  return actionCreator;
};

export const createTransaction = createAction(CREATE_TRANS);
const createTransactionAction = createTransaction<Record<string, unknown>>({});
export type RequestTransAction = typeof createTransactionAction;
export const createCategory = createAction(CREATE_CAT);
const createCategoryAction = createCategory<string>('');
export type RequestCatAction = typeof createCategoryAction;

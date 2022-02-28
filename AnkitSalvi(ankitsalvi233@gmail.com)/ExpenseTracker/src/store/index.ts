import { createStore, createTypedHooks } from 'easy-peasy'
import transactionsModel, { TransactionsModel } from './models/transactions'

export interface StoreModel {
    transactions: TransactionsModel,
  }
  
  const storeModel: StoreModel = {
    transactions: transactionsModel
  }
  


const typedHooks = createTypedHooks<StoreModel>()

export const useStoreActions = typedHooks.useStoreActions
export const useStoreDispatch = typedHooks.useStoreDispatch
export const useStoreState = typedHooks.useStoreState




const store = createStore(storeModel)

export default store

import { Transaction, NewTransaction } from '../../models'
import { Action, action, Computed, computed } from 'easy-peasy'
import { v4 as uuidv4 } from 'uuid'

export interface TransactionsModel {
  items: Transaction[],
  category: string[],
  graphdata: GraphData[],
  transactions: Computed<TransactionsModel, Transaction[]>,
  // categories: Computed<TransactionsModel, Array<string>>,
  totalBalance: Computed<TransactionsModel, string>,
  totalIncome: Computed<TransactionsModel, string>,
  totalExpense: Computed<TransactionsModel, string>,
  addTransaction: Action<TransactionsModel, NewTransaction>,
  addCategory: Action<TransactionsModel, string>,
  saveTransactions: Action<TransactionsModel, void>,
  loadTransactions: Action<TransactionsModel, void>,
  saveCategories: Action<TransactionsModel, void>,
  loadCategories: Action<TransactionsModel, void>,
  deleteCategory: Action<TransactionsModel, string>,
  saveGraphData: Action<TransactionsModel, void>,
  loadGraphData: Action<TransactionsModel, void>,
}

interface GraphData {
    label: string,
    data: number,
}

const transactionsModel: TransactionsModel = {

  items: [],
  category: [],
  graphdata: [],

  /* Computed */
  transactions: computed((state) => state.items.reverse()),

  // categories: computed((state) => state.category.reverse()),


  totalBalance: computed((state) => {
    return state.items.reduce((acc, t) => acc + t.amount, 0).toFixed(2)
  }),


  totalIncome: computed((state) => {
    const income = state.items.filter((t) => t.amount > 0)
    return income.reduce((acc, t) => acc + t.amount, 0).toFixed(2)
  }),


  totalExpense: computed((state) => {
    const expenses = state.items.filter((t) => t.amount < 0)
    return expenses.reduce((acc, t) => acc + t.amount, 0).toFixed(2)
  }),


  /* Actions */
  addTransaction: action((state, payload) => {
    console.log("inside addTransaction")
    const transaction: Transaction = {
      id: uuidv4(),
      ...payload,
    }

    const item = state.graphdata.find((item)=>item.label===payload.description)

    if(item){
      state.graphdata.forEach((item)=>{
        if(item.label===payload.description)item.data+=payload.amount
      })
    }
    else{
      state.graphdata.push({label:payload.description, data:payload.amount})
    }
    
    // if(state.graphdata[payload.description])state.graphdata[payload.description]+=payload.amount;
    // else state.graphdata[payload.description]=payload.amount;


    state.items.push(transaction)
  }),

  addCategory : action((state, payload) => {
      const isPresent = state.category.find((item) => item === payload)
      if(!isPresent)state.category.push(payload)
  }),


  saveTransactions: action((state) => {
    /* Save state to localStorage */
    localStorage.setItem('transactions', JSON.stringify(state.items))
  }),



  loadTransactions: action((state) => {
    /* Retrieve transactions from localStorage */
    const lsTransactions = localStorage.getItem('transactions')
    if (lsTransactions) {
      const transactions = JSON.parse(lsTransactions)
      state.items = transactions
    }
  }),


  loadCategories: action((state) => {
    console.log('Inside Load Categoru')
    const lsCategories = localStorage.getItem('categories')
    if (lsCategories) {
      const categories = JSON.parse(lsCategories)
      state.category = categories
    }
  }),

  saveCategories: action((state) => {
    console.log('Inside SAve Categoru')
    localStorage.setItem('categories', JSON.stringify(state.category))
  }),


  saveGraphData: action((state) => {
    localStorage.setItem('graphdatas', JSON.stringify(state.graphdata))
  }),


  deleteCategory: action((state, payload) => {
    const index = state.category.findIndex((t) => t === payload)
    if (index !== -1) state.category.splice(index, 1)
  }),




  loadGraphData: action((state) => {
    const lsGraphdata = localStorage.getItem('graphdatas')
    if (lsGraphdata) {
      const graphdatas = JSON.parse(lsGraphdata)
      state.graphdata = graphdatas
    }
  }),
}

export default transactionsModel

import React, {useReducer, createContext} from 'react';

import contextReducer from './contextReducer'

const initialState = JSON.parse(localStorage.getItem('transactions')) || [[{"amount":30,"category":"Entertainment","type":"Expense","date":"2021-12-23","id":"296a872e-77b0-4ef1-abd4-86e1506949b4"},{"amount":60,"category":"Travel","type":"Expense","date":"2021-12-23","id":"e865b299-c2dc-4ac8-b0ed-efd57b9063fd"},{"amount":50,"category":"Lottery","type":"Income","date":"2021-12-23","id":"97e9f102-868e-4d67-b100-db26dac4af72"},{"amount":70,"category":"Business","type":"Income","date":"2021-12-23","id":"fc79bd5c-a0bb-4229-9a81-d2ff3df3ee99"},{"amount":50,"category":"Extra income","type":"Income","date":"2021-12-23","id":"2b2bc575-589c-4c4f-bec9-f99839d73c45"}]];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({children})=>{
const [transactions, dispatch] = useReducer(contextReducer, initialState)

const deleteTransaction = (id)=>{

    dispatch({type:'DELETE_TRANSACTION', payload:id})
};

const addTransaction =(transaction)=>{

    dispatch({type:'ADD_TRANSACTION', payload:transaction})

};

const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);

return(

<ExpenseTrackerContext.Provider value={{

deleteTransaction,
addTransaction,
transactions,
balance

}} > 
    {children}
</ExpenseTrackerContext.Provider>

);

}
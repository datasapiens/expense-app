
import { categoryState,transactionState } from "../Interface";


export const categoryList: categoryState[]  = [
    {
        id:'salary',
        label: 'Salary'
    },
    {
        id:'food', 
        label:'Food'
    },
    {
        id:'utilities',
        label:'utlities'
    },
    {
        id:'gift' ,
        label:'Gifts'
    },
    {
        id:'travel',
        label:'Travelling'
    }
]

export const transactionList: transactionState[] = [
    {
        id:'transact_0', 
        label:'January Salary', 
        date:new Date(),
        amount:12493,
        category:'salary'
    },
    {
        id: 'transact_1', 
        label:'Travelling to London',
        date:new Date(),
        amount:-120,
        category:'travel'
    },
    {
        id: 'transact_2', 
        label:'Gifts from Uncle', 
        date: new Date(),
        amount:750,
        category: 'gift'
    },
    {
        id:'transact_3',
        label:'Gas and Internet ',
        date:new Date(),
        amount:-490,
        category:'utilities'

    },
    {
        id: 'transact_4',
        label:'Trip to Paris',
        date: new Date(),
        amount:-230,
        category:'travel'
    },
]

// interface newarray {
//     category:string,
//     amount: number
// }



   


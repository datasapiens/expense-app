import * as transactionTypes from '../types/transactionTypes';
import { transactionList } from '../../Api/Api';
import {  transactionState } from '../../Interface';


const initialState: transactionState[] = [
    ...transactionList
]

const transactionReducer = (state=initialState, action:any) =>{
    switch(action.type){
        case transactionTypes.GET_ALL_TRANSACTION_START:
            return {
                ...state
            }
        case transactionTypes.GET_ALL_TRANSACTION_SUCCESS:
            return{
                ...state, ...action.payload
            }
        default:
            return state
    }
}

export default transactionReducer;
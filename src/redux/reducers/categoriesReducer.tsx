import * as  categoryType from '../types/categoriesTypes';
import {categoryList} from '../../Api/Api';
import { categoryState } from '../../Interface';



const initialState: categoryState[]  = [
   ...categoryList
];

const categoryReducer = (state = initialState, action:any) =>{
    switch(action.type){
        case categoryType.GET_ALL_CATEGORY_START:
            return{
                ...state
            }
        case categoryType.GET_ALL_CATEGORY_SUCCESS:
            return{
                ...state,...action.payload
            }
        default:
            return state
    }
}

export default categoryReducer

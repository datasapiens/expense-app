import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CategoryState {
  id: number,
  label: string
}

interface CategorySliceState {
  category: CategoryState[];
}

const initialState: CategorySliceState = {
  category: [
    {
      id: 1,
      label: "Gifts",
    },
    {
      id: 2,
      label: "Travelling",
    },
    {
      id: 3,
      label: "Food",
    },
    {
      id: 4,
      label: "Bills",
    },
  ]
}

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<string>)=>{
      state.category = [
        ...state.category,
        {
          id: state.category.length + 1,
          label: action.payload,
        }
      ]
    }
  }
});

export const {addCategory} = categorySlice.actions;

export default categorySlice.reducer
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface TransactionState {
  id: number,
  label: string,
  date: string,
  amount: string,
  category: number
}

interface TransactionSliceState {
  transaction: TransactionState[];
}

const initialState: TransactionSliceState = {
  transaction: []
}

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<TransactionState>) => {
      state.transaction = [
        ...state.transaction,
        {
          id: state.transaction.length + 1,
          label: action.payload.label,
          date: action.payload.date,
          amount: action.payload.amount,
          category: action.payload.category
        }
      ]
    }
  }
})

export const { addTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
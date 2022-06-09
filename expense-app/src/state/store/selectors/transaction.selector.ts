import { RootState } from "../../state.module";

export const selectTransactions = (state: RootState) => state.transactions.transactions;
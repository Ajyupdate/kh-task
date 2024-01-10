// slices/transactionSlice.js
import { MockData } from "@/modules/Transactions/components/TransactionTable";
import { createSlice } from "@reduxjs/toolkit";
const transactionSlice = createSlice({
  name: "transactions",
  initialState: {
    data: [],
    currentPage: 1,
  },
  reducers: {
    setTransactions: (state, action) => {
      state.data = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setTransactions, setCurrentPage } = transactionSlice.actions;
export const selectTransactions = (state: {
  transactions: { data: MockData[]; currentPage: number };
}) => state.transactions;

export default transactionSlice.reducer;

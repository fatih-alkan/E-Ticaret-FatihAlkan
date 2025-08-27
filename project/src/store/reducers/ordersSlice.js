import { createSlice } from "@reduxjs/toolkit";

const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    list: savedOrders,
  },
  reducers: {
    addOrder: (state, action) => {
      state.list.push(action.payload);
      localStorage.setItem("orders", JSON.stringify(state.list));
    },
    clearOrders: (state) => {
      state.list = [];
      localStorage.setItem("orders", JSON.stringify(state.list));
    },
  },
});

export const { addOrder, clearOrders } = ordersSlice.actions;
export default ordersSlice.reducer;

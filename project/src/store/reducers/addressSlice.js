import { createSlice } from "@reduxjs/toolkit";

const savedAddresses = localStorage.getItem("addresses");

const initialState = {
  addresses: savedAddresses ? JSON.parse(savedAddresses) : [], // artık array
  selectedAddress: null,
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    addAddress: (state, action) => {
      state.addresses.push(action.payload);
      localStorage.setItem("addresses", JSON.stringify(state.addresses));
    },
    clearAddress: (state, action) => {
      state.addresses = state.addresses.filter((_, i) => i !== action.payload);
      localStorage.setItem("addresses", JSON.stringify(state.addresses));
    },
    selectAddress: (state, action) => {
      state.selectedAddress = action.payload;
    },
  },
});

export const { addAddress, clearAddress, selectAddress } = addressSlice.actions;
export default addressSlice.reducer;
